(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,6654,64537,20861,93343,75507,e=>{"use strict";function a(e){return e.replace(/[’]/g,"'").split(/[^A-Za-z0-9']+/).map(e=>e.replace(/^'+|'+$/g,"")).filter(Boolean).length}function t(e){return e.map(e=>e.text).join(" ")}function o(e){return e.pages.reduce((e,o)=>e+o.panels.reduce((e,o)=>e+a(t(o.bubbles)),0),0)}function i(e){return e.toLowerCase().replace(/[^a-z']/g,"")}e.s(["bubbleText",0,t,"flatPanels",0,function(e){return e.pages.flatMap((e,a)=>e.panels.map((t,o)=>({page:e,pageIndex:a,panel:t,panelIndex:o})))},"normalizeWord",0,i,"storyWordCount",0,o,"wordCount",0,a],64537);let r={5:65,6:80,7:95,8:110,9:125},s={5:10,6:9,7:8,8:7,9:6};function n(e){return function(e){let o,i={wordsPerMinute:r[o=Math.min(9,Math.max(5,Math.round(e.ladderLevel)))]??95,secondsPerPanel:s[o]??8},{words:n,panels:h}=function(e){let o=0,i=0;for(let r of e)for(let e of(i+=r.panels.length,r.panels))o+=a(t(e.bubbles));return{words:o,panels:i}}(e.pages);return n/i.wordsPerMinute*60+h*i.secondsPerPanel+n/100*24+22*e.questionCount}({pages:e.pages,ladderLevel:e.ladderLevel,questionCount:e.comprehension.length})/60}function h(e){return Math.max(1,Math.round(e))}function l(e,a,t,o){return{prompt:e,options:a.map(([e,a,t])=>({id:e,label:a,emoji:t})),answerId:t,type:o}}e.s(["displayMinutes",0,h,"estimateReadingMinutes",0,n],20861);let d=[{id:"place-f-s2",genre:"fiction",ladderLevel:6,title:"The Last Cookie",glossary:[{word:"sorry",definition:"Feeling bad about what you did."}],questions:[l("Who is the cookie for?",[["mira","Mira","🍪"],["lion","The lion","🦁"],["none","Nobody","🚫"]],"mira","recall"),l("How does Dev feel?",[["kind","Sorry, then kind","💛"],["angry","Angry","😠"],["asleep","Asleep","😴"]],"kind","inference")],pages:[{id:"p1",panels:[{id:"a",scene:"library",characters:["dev","mira"],bubbles:[{id:"a1",kind:"speech",speaker:"Mira",text:"Dev hid the last cookie, but he looked sorry."}]},{id:"b",scene:"library",characters:["dev"],bubbles:[{id:"b1",kind:"speech",speaker:"Dev",text:"I saved it for you. I hope you are glad."}]}]}]},{id:"place-n-s2",genre:"nonfiction",ladderLevel:6,title:"Why Bees Visit Flowers",glossary:[{word:"pollen",definition:"The dusty grains flowers use to make seeds."}],questions:[l("What do bees sip?",[["sweet","A sweet drink","🍯"],["rain","Rain","🌧️"],["soup","Soup","🥣"]],"sweet","recall"),l("What do they carry?",[["pollen","Pollen","🌼"],["rocks","Rocks","🪨"],["books","Books","📚"]],"pollen","recall")],pages:[{id:"p1",panels:[{id:"a",scene:"meadow",characters:["wombat"],bubbles:[{id:"a1",kind:"speech",speaker:"Wombat",text:"Bees visit flowers to sip a sweet drink."}]},{id:"b",scene:"meadow",characters:["wombat"],bubbles:[{id:"b1",kind:"caption",text:"They carry pollen from bloom to bloom."}]}]}]},{id:"place-f-s3",genre:"fiction",ladderLevel:7,title:"Two Books",glossary:[{word:"worried",definition:"Thinking something might go wrong."}],questions:[l("What did they decide?",[["turns","To take turns","🔁"],["stop","To stop reading","🚫"],["hide","To hide the books","🙈"]],"turns","inference"),l("How did Dev feel at first?",[["worried","Worried","😟"],["hungry","Hungry","🍎"],["bored","Bored","😐"]],"worried","inference")],pages:[{id:"p1",panels:[{id:"a",scene:"library",characters:["mira","dev"],bubbles:[{id:"a1",kind:"narration",text:"Mira wanted the glowing book, but Dev wanted the map book."},{id:"a2",kind:"speech",speaker:"Mira",text:"We can read yours first, and mine after."}]},{id:"b",scene:"library",characters:["dev"],bubbles:[{id:"b1",kind:"speech",speaker:"Dev",text:"That feels fair. I was worried you would mind."}]}]}]},{id:"place-n-s3",genre:"nonfiction",ladderLevel:7,title:"What a Seed Needs",glossary:[{word:"root",definition:"The part of a plant that grows down and drinks water."}],questions:[l("What do leaves catch?",[["light","Light","☀️"],["snow","Snow","❄️"],["toys","Toys","🧸"]],"light","recall"),l("What happens with no light?",[["food","Leaves cannot make food","🍃"],["run","The root runs away","🏃"],["sing","The pot sings","🎵"]],"food","inference")],pages:[{id:"p1",panels:[{id:"a",scene:"meadow",characters:["wombat"],bubbles:[{id:"a1",kind:"speech",speaker:"Wombat",text:"A seed needs water, light, and a place to grow."}]},{id:"b",scene:"meadow",characters:["wombat"],bubbles:[{id:"b1",kind:"caption",text:"The root takes in water. The leaves catch light."}]},{id:"c",scene:"meadow",characters:["wombat"],bubbles:[{id:"c1",kind:"speech",speaker:"Wombat",text:"Without light, the leaves cannot make food."}]}]}]},{id:"place-f-s1",genre:"fiction",ladderLevel:5,title:"Soft Cat",glossary:[{word:"soft",definition:"Nice to touch. Not hard."}],questions:[l("Where is the cat?",[["mat","On the mat","🐱"],["sea","In the sea","🌊"],["tree","Up a tree","🌳"]],"mat","recall"),l("How is the cat?",[["soft","Soft and warm","🤗"],["sharp","Sharp and cold","🧊"],["loud","Very loud","📢"]],"soft","recall")],pages:[{id:"p1",panels:[{id:"a",scene:"library",characters:["mira"],bubbles:[{id:"a1",kind:"speech",speaker:"Mira",text:"The cat sat on the mat."}]},{id:"b",scene:"library",characters:["dev"],bubbles:[{id:"b1",kind:"speech",speaker:"Dev",text:"The cat is soft and warm."}]}]}]},{id:"place-n-s1",genre:"nonfiction",ladderLevel:5,title:"Fish",glossary:[{word:"fins",definition:"The flat parts a fish uses to swim."}],questions:[l("Where do fish live?",[["water","In water","💧"],["nest","In a nest","🪺"],["book","In a book","📘"]],"water","recall"),l("What helps them swim?",[["fins","Fins","🐟"],["boots","Boots","👢"],["hats","Hats","🎩"]],"fins","recall")],pages:[{id:"p1",panels:[{id:"a",scene:"meadow",characters:["wombat"],bubbles:[{id:"a1",kind:"speech",speaker:"Wombat",text:"Fish live in water."}]},{id:"b",scene:"meadow",characters:["wombat"],bubbles:[{id:"b1",kind:"caption",text:"They use fins to swim."}]}]}]}];e.s(["PLACEMENT_STRIPS",0,d,"stripByGenreLevel",0,function(e,a){return d.find(t=>t.genre===e&&t.ladderLevel===a)}],93343);let p=[{id:"midnight-library",title:"The Midnight Library Club",genre:"fiction",blurb:"After school, Mira and Dev follow a book that glows.",themes:["books","friendship"],emoji:"📚"},{id:"captain-comet",title:"Captain Comet's Crew",genre:"fiction",blurb:"Comet and Pip chase a quiet signal between the stars.",themes:["space","teamwork"],emoji:"🚀"},{id:"wonder-wombat",title:"Wonder Wombat's Why Files",genre:"nonfiction",blurb:"Wombat asks a science question and checks the facts.",themes:["science","sky"],emoji:"🔍"},{id:"time-hop",title:"Time-Hop Reporters",genre:"nonfiction",blurb:"Asha and Rafi interview people from long ago.",themes:["history","fairness"],emoji:"⏳"},{id:"shared-fables",title:"Fables we can share",genre:"fiction",blurb:"Aesop, Jataka, and Panchatantra tales, retold in our own words.",themes:["kindness","animals"],emoji:"🦁"}];e.s(["GENRE_BADGES",0,[{id:"books",seriesId:"midnight-library",label:"Book adventurer",emoji:"📚"},{id:"space",seriesId:"captain-comet",label:"Space explorer",emoji:"🚀"},{id:"science",seriesId:"wonder-wombat",label:"Science detective",emoji:"🔬"},{id:"history",seriesId:"time-hop",label:"History hopper",emoji:"⏳"},{id:"fables",seriesId:"shared-fables",label:"Fable friend",emoji:"🦁"}],"SERIES",0,p],75507);var m=e.i(49465);let g=new Set(["caption","narration","thought"]),c={pipeline:"house-svg",notes:"House-style SVG character kits and backgrounds. Every word stays in the text layer."};function w(e,a,t){return{origin:"adapted",license:"Original retelling of a public-domain tale. This wording is original to Reading Champ and is not copied from the source edition.",attribution:e,sourceUrl:a,nc:!1,sa:!1,verifiedBy:"Reading Champ content pass — not a legal review",verifiedOn:"2026-10-11",notes:t}}function b(e,a,t,o){return{prompt:e,options:a.map(([e,a,t])=>({id:e,label:a,emoji:t})),answerId:t,type:o}}function u(e,a){return{word:e,definition:a}}function f(e){let o=function(e,o){let i=(0,m.ceilingFor)(o),r=e.flatMap(e=>e.panels);if(0===r.length)return[];let s=r.map(e=>a(t(e.bubbles))),n=Math.max(3,i.maxPanelsPerPage),h=Math.max(1,Math.ceil(r.length/n)),l=e=>{let a=Math.floor(r.length/e),t=r.length%e;return Array.from({length:e},(e,o)=>a+ +(o<t))},d=e=>{let a=l(e),t=0;return a.every(e=>{let a=s.slice(t,t+e);t+=e;let o=a.reduce((e,a)=>e+a,0);return e<=i.maxPanelsPerPage&&o<=i.maxWordsPerPage})};for(;!d(h)&&h<r.length;)h+=1;let p=0;return l(h).map((e,a)=>{let t=r.slice(p,p+e);return p+=e,{id:`p${a+1}`,panels:t}})}(e.script.trim().split(/\n(?=# page\b)/).map(e=>e.replace(/^# page[^\n]*\n?/,"").trim()).filter(Boolean).map((e,a)=>{let t=e.split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean).map((e,t)=>(function(e,a,t){let o=e.split("\n").map(e=>e.trim()).filter(Boolean),i=o[0];if(!i)throw Error("Empty panel");let[r,s=""]=i.split(/\s+/,2),n=s?s.split(",").filter(Boolean):[],h=o.slice(1).map((e,o)=>{let i=e.match(/^([^:]+):\s*(.+)$/);if(!i)throw Error(`Bad script line: ${e}`);let r=i[1].trim(),s=g.has(r.toLowerCase())?r.toLowerCase():"speech";return{id:`p${a+1}n${t+1}b${o+1}`,kind:s,speaker:"speech"===s?r:void 0,text:i[2].trim()}});return{id:`p${a+1}n${t+1}`,scene:r,characters:n,bubbles:h}})(e,a,t));return{id:`p${a+1}`,panels:t}}),e.ladderLevel);return{id:e.id,title:e.title,seriesId:e.seriesId,episode:e.episode,genre:e.genre,subgenre:e.subgenre,themes:e.themes,ladderLevel:e.ladderLevel,ageFloor:8,language:"en",pages:o,glossary:e.glossary,comprehension:e.comprehension,talkAbout:e.talkAbout,expectedMinutes:h(n({pages:o,ladderLevel:e.ladderLevel,comprehension:e.comprehension})),status:"reviewed",stretchEligible:e.stretchEligible,source:e.source??function(e={}){return{origin:"original",license:"Original text written for Mindstrong Reading Champ.",attribution:"Original Reading Champ story.",nc:!1,sa:!1,verifiedBy:"Reading Champ content pass — not a legal review",verifiedOn:"2026-10-11",...e}}(),art:c}}let k=[f({id:"comet-quiet",title:"The Quiet Planet",seriesId:"captain-comet",episode:1,genre:"fiction",subgenre:"mystery",themes:["space","teamwork"],ladderLevel:6,expectedMinutes:12,stretchEligible:!0,glossary:[u("planet","A world that travels around a star."),u("beacon","A light that calls for help.")],talkAbout:"Pip felt scared and still chose to help. What helps you be brave?",comprehension:[b("What did Comet and Pip find?",[["beacon","A blinking beacon","💡"],["cake","A cake","🎂"],["map","A paper map","🗺️"]],"beacon","recall"),b("Why do they stay together?",[["help","Someone may need help","🤝"],["race","They want to race","🏁"],["sleep","They want to nap","😴"]],"help","inference")],script:`
# page
space comet,pip
Comet: Pip, this planet is very quiet.
Pip: Did the crew leave this place?

# page
space comet,pip
Pip: I see no lights at all.
Comet: The homes look shut and still.

# page
space comet,pip
caption: Their ship sat on gray sand.
Comet: The wind makes no sound here.

# page
space pip,comet
Pip: This quiet makes my heart beat.
Comet: Stay close while we look around.

# page
space comet,pip
Comet: We will walk past these huts.
Pip: Every door is shut tight.

# page
space comet,pip
caption: A sign hung and did not move.
Pip: No one calls out to us.

# page
space pip,comet
Pip: Is this path safe for us?
Comet: We look first, then we step.

# page
space comet,pip
Comet: I see a faint glow ahead.
Pip: It sits low by the rocks.

# page
space comet,pip
caption: A blinking beacon sat by the rocks.
Comet: That light is calling for help.

# page
space pip,comet
Pip: The beacon blinks on and off.
Comet: A blinking light means a call.

# page
space comet,pip
Comet: This planet has a beacon.
Pip: So the crew left us a sign.

# page
space pip,comet
Pip: I feel scared in this quiet.
Comet: My hands feel a bit cold.

# page
space comet,pip
Comet: I feel scared too, Pip.
Pip: We can still choose to help.

# page
space comet,pip
Comet: A person may need our help.
Pip: Then we should not turn back.

# page
space pip,comet
Pip: Can we go slow from here?
Comet: Yes, and we stay together.

# page
space comet,pip
caption: Thick dust lay all along the path.
Pip: The blink is hard to see.

# page
space comet,pip
Comet: Dust blows over the beacon.
Pip: The light is fading fast now.

# page
space pip,comet
caption: A metal gate blocked the path.
Comet: It will not open for us.

# page
space pip,comet
Pip: I pull, but the gate sticks.
Comet: It is stuck in the dust.

# page
space comet,pip
Comet: Dust gets in my visor.
Pip: We stop and wipe it clear.

# page
space comet,pip
caption: The beacon light faded to a dim glow.
Comet: Do not rush this part.

# page
space pip,comet
Pip: I want to go back now.
Comet: A person may need us here.

# page
space comet,pip
Comet: We stay together and help.
Pip: I choose help, even if scared.

# page
space comet,pip
Comet: I will clear dust from it.
Pip: I can hold the lamp steady.

# page
space pip,comet
Pip: The gate still will not move.
Comet: We try one slow push now.

# page
space comet,pip
caption: A rock pinned the gate shut.
Pip: We can roll it a bit.

# page
space comet,pip
Comet: The gate opens a small crack.
Pip: Dust falls off the beacon.

# page
space pip,comet
Pip: The blink grows bright again.
Comet: Good, the call is still on.

# page
space comet,pip
caption: A small camp sat by the light.
Comet: A pack rests near the beacon.

# page
space pip,comet
Pip: No person is here right now.
Comet: But the call was still real.

# page
space pip,comet
Pip: I felt scared and still helped.
Comet: That was a brave choice, Pip.

# page
space comet,pip
Comet: Our air is fine for now.
Pip: We should not stay all night.

# page
space comet,pip
Comet: We stop for the day here.
Pip: We can come back later.

# page
space pip,comet
Pip: I mark this spot on our map.
Comet: The beacon is our main mark.

# page
space comet,pip
Comet: Next time we bring a rope.
Pip: And a bright lamp for dust.

# page
space comet,pip
caption: They left a note by the beacon.
Comet: The note says we will return.

# page
space pip,comet
Pip: We walk back slow, side by side.
Comet: The ship waits on the plain.

# page
space pip,comet
Pip: I look back at the blink.
Comet: It still calls across the dust.

# page
space comet,pip
Comet: Next day we find who called.
Pip: I will come back with you.

# page
space comet,pip
caption: They rested inside the quiet ship.
Pip: This day was long and good.

# page
space pip,comet
Pip: I feel better than before.
Comet: We made a clear plan too.

# page
space comet,pip
caption: The beacon kept blinking in the dust.
Comet: It can wait for one night.

# page
space pip,comet
Pip: Staying together was the right call.
Comet: Yes, we will go slow again.

# page
space comet,pip
Comet: We return when the light is up.
Pip: Until then, the plan can wait.
`}),f({id:"comet-signal",title:"Signal in the Dark",seriesId:"captain-comet",episode:2,genre:"fiction",subgenre:"mystery",themes:["space","teamwork"],ladderLevel:8,expectedMinutes:12,stretchEligible:!0,glossary:[u("hatch","A small door on a ship or a rock."),u("pinch","In a pinch means you are stuck and need a plan."),u("budge","To move, even a little.")],talkAbout:"The crew was in a pinch. What is a fair way to share when something is running low?",comprehension:[b("What did the idiom in a pinch mean here?",[["stuck","They might get stuck","🛟"],["snack","They wanted a snack","🍪"],["song","They sang a song","🎵"]],"stuck","inference"),b("What answered Pip?",[["tap","A tap from inside","🚪"],["bird","A bird","🐦"],["rain","Rain","🌧️"]],"tap","recall"),b("What did Comet share?",[["air","The air tank","🫧"],["cake","A cake","🎂"],["map","A treasure map","🗺️"]],"air","recall")],script:`
# page
space comet,pip
Comet: The beacon still blinks on the rocks.
Pip: We came back to follow it.

# page
space comet,pip
Pip: I am glad we made a plan.
Comet: Stay close while we track the blink.

# page
space comet,pip
caption: They walked past the stuck gate.
Comet: The dust is thick on this path.

# page
space pip,comet
Pip: The rocks are dark up ahead.
Comet: Lamps on, and we go slow.

# page
space comet,pip
Comet: The blink leads us down a slope.
Pip: I will keep my steps with yours.

# page
space comet,pip
caption: Boot prints faded in the gray dust.
Pip: The wind hides them very fast.

# page
space pip,comet
Pip: I see a cave mouth ahead.
Comet: The blink comes from in there.

# page
space comet,pip
Comet: We step in with our lamps up.
Pip: The walls feel cold and still.

# page
space comet,pip
caption: The cave turns and the blink hides.
Pip: For a moment we lose the light.

# page
space comet,pip
Comet: Dust falls from the cave roof.
Pip: I stay right by your side.

# page
space comet,pip
Comet: We keep going, side by side.
Pip: I can see a faint blink now.

# page
space pip,comet
caption: The blink grew brighter near the back.
Pip: We are close to the call now.

# page
space pip,comet
Pip: My tank feels light on my back.
Comet: Let me check how much air is left.

# page
space comet,pip
caption: The air tank was getting low.
Comet: We do not have air to waste.

# page
space pip,comet
Pip: We are in a pinch right now.
Comet: In a pinch we might get stuck.

# page
space comet,pip
Comet: If the air runs out, we stop.
Pip: Then we could not reach the blink.

# page
space comet,pip
Comet: I will share my air tank.
Pip: We can take turns with it.

# page
space comet,pip
caption: Comet shared the air tank with Pip.
Pip: Your turn first, then it is mine.

# page
space pip,comet
Pip: I take a short turn now.
Comet: Then pass the tank back to me.

# page
space comet,pip
Comet: Sharing keeps both of us safe.
Pip: That is a fair plan, Comet.

# page
space comet,pip
Comet: Let me check the tank once more.
Pip: There is enough if we go slow.

# page
space comet,pip
caption: They moved slow to save the air.
Pip: The blink is just ahead of us.

# page
space pip,comet
Pip: I see a round shape in the rock.
Comet: Dust sits thick on that hatch.

# page
space comet,pip
caption: A hatch sat shut under the dust.
Pip: It looks like a small door.

# page
space pip,comet
Pip: I will wipe the dust off.
Comet: Good, now we can see the rim.

# page
space pip,comet
Pip: I pull the hatch with both hands.
Comet: Does the hatch budge at all?

# page
space comet,pip
caption: Pip pulled, but the hatch did not budge.
Comet: Let me try a strong pull.

# page
space comet,pip
Comet: It still will not budge for me.
Pip: A bar is stuck in the rim.

# page
space pip,comet
Pip: I brush more dust from the hatch.
Comet: The rim is clear, but it stays shut.

# page
space comet,pip
Comet: Let us look for a weak spot.
Pip: The hinge is packed with dust.

# page
space pip,comet
Pip: I chip the dust off the hinge.
Comet: The hatch still stays shut tight.

# page
space comet,pip
Comet: A person may be inside there.
Pip: How can we let them know we came?

# page
space comet,pip
Comet: Three taps, then we wait and listen.
Pip: I can tap on the hatch.

# page
space pip,comet
caption: Pip gave three slow taps on the hatch.
Comet: Now we stay still and wait.

# page
space comet,pip
Pip: I hear no tap back yet.
Comet: Count to ten, then we try again.

# page
space pip,comet
Pip: I will give three taps once more.
Comet: Same spot, and then we listen.

# page
space pip
caption: A tap from inside answers Pip.
Pip: I hear a tap from inside!

# page
space comet,pip
Comet: I hear that tap too, Pip.
Pip: One tap came back to us.

# page
space comet,pip
Comet: A person is in there now.
Pip: The tap means they heard us.

# page
space pip,comet
Pip: I feel hope and a bit of fear.
Comet: We can help if we use a plan.

# page
space comet,pip
Comet: We share the tank once more.
Pip: Then we lift the hatch on three.

# page
space pip,comet
Pip: I found a bar by the wall.
Comet: We can fit it under the rim.

# page
space comet,pip
caption: They fit the bar under the hatch.
Comet: On three, we pull up hard.

# page
space comet,pip
Pip: On three we pull up now!
Comet: Pull with me, nice and slow.

# page
space comet,pip
caption: The hatch began to budge at last.
Pip: It moved a tiny bit for us!

# page
space comet,pip
Comet: Keep pulling, the hatch is moving.
Pip: I can see a dark crack now.

# page
space pip,comet
Pip: The hatch opens more on this side.
Comet: One more pull and it should lift.

# page
space comet,pip
caption: The hatch opened with a slow groan.
Pip: I see a face down in there!

# page
space comet,pip
Comet: A scout climbs out of the hatch.
Pip: They look tired and low on air.

# page
space comet,pip
Comet: I will share the air tank again.
Pip: The scout can take a turn too.

# page
space comet,pip
caption: The scout took a long turn with the tank.
Pip: Sit here by the open hatch.

# page
space comet,pip
Comet: The scout was stuck a long time.
Pip: We heard that tap from inside.

# page
space pip,comet
caption: Pip helped the scout sit on a rock.
Comet: Our air can last if we rest.

# page
space comet,pip
Pip: The scout nods to say thanks.
Comet: We will wait here until the air is safe.

# page
space comet,pip
caption: The beacon blink went dark and still.
Pip: The call can rest now too.

# page
space comet,pip
Comet: The scout can walk if we help.
Pip: We go slow and share the air.

# page
space comet,pip
caption: Comet pointed the way back to the ship.
Pip: The path is dark, but we know it.

# page
space comet,pip
Comet: We rest when we reach the ship.
Pip: The day was hard, and we helped.

# page
space comet,pip
caption: They sat by the ship and passed the tank.
Pip: In a pinch, we shared and made a plan.

# page
space comet,pip
Comet: Next time the air will be full.
Pip: Today we rest, and that is good.
`})],y="https://www.gutenberg.org/ebooks/21",v="https://archive.org/details/in.ernet.dli.2015.37110",D="Do not brand this with Project Gutenberg. The link is the traditional public-domain text. These words are a new retelling.",T=[f({id:"aesop-tortoise-hare",title:"The Tortoise and the Hare",seriesId:"shared-fables",episode:1,genre:"fiction",subgenre:"fable",themes:["kindness","animals"],ladderLevel:5,expectedMinutes:6,stretchEligible:!1,glossary:[u("steady","Slow and even, not stopping."),u("boast","To talk as if you cannot lose.")],talkAbout:"The hare was fast and still lost. When does slow and steady help you?",comprehension:[b("Who won the race?",[["tortoise","The tortoise","🐢"],["hare","The hare","🐰"],["bird","A bird","🐦"]],"tortoise","recall"),b("Why did the hare lose?",[["nap","He stopped for a nap","😴"],["mud","He got lost in mud","🌧️"],["tie","His shoes fell off","👟"]],"nap","inference")],source:w("Original retelling of the public-domain fable “The Tortoise and the Hare,” attributed to Aesop.",y,D),script:`
# page
meadow tortoise,hare
Hare: You are slow and I am fast.
Tortoise: Then we can race and see.

# page
meadow tortoise,hare
Hare: My boast is true on this path.
Tortoise: Pick a mark and we start.

# page
meadow tortoise
Tortoise: I am steady and will not stop.
caption: He set his feet on the path.

# page
meadow hare
Hare: I can nap and still win this.
caption: Hare laughed and shook his long legs.

# page
meadow tortoise,hare
Hare: Go now and try to catch me.
Tortoise: I start with one calm step.

# page
forest hare
caption: Hare ran far ahead of the start.
Hare: This race will be easy for me.

# page
forest tortoise
caption: Tortoise took one step then another.
Tortoise: Slow steps can still reach the end.

# page
forest hare
caption: Hare was far ahead by the trees.
Hare: I see no need to rush now.

# page
forest hare
Hare: A short nap will not cost me.
caption: He lay down in the warm shade.

# page
forest hare
caption: Hare shut his eyes and soon slept.
Hare: There is lots of time to rest.

# page
meadow tortoise
caption: Tortoise walked on under the hot sun.
Tortoise: I will not stop for a rest.

# page
meadow tortoise
Tortoise: Step after step I stay on course.
caption: His pace did not change at all.

# page
forest hare
caption: A bird saw Hare fast asleep.
caption: The bird kept still and watched.

# page
meadow tortoise,hare
caption: Tortoise came near the sleeping hare.
Tortoise: He can rest while I go past.

# page
meadow tortoise
caption: Tortoise went past the still hare.
Tortoise: I must get to the end mark.

# page
meadow tortoise
Tortoise: The end mark is not far now.
caption: He kept his eyes on the path.

# page
forest hare
caption: Hare woke and sat up fast.
Hare: I feel ready to run again.

# page
forest hare
Hare: Where is that slow walker now?
caption: The path ahead of him looked empty.

# page
forest hare
Hare: He must still be far behind me.
caption: Hare did not look back at first.

# page
meadow hare
caption: Then Hare ran hard toward the mark.
Hare: I can still get there first.

# page
meadow tortoise,hare
caption: Tortoise was close to the end mark.
Hare: Wait there so I can pass you.

# page
meadow tortoise
Tortoise: I did not wait on the way.
caption: His last steps were slow but sure.

# page
meadow tortoise,hare
caption: Tortoise crossed the end mark first.
Hare: No, that cannot be the end.

# page
meadow hare
Hare: How did you get here so soon?
caption: Hare stood still and stared at him.

# page
meadow tortoise,hare
Tortoise: You took a nap on the path.
Hare: I thought there was time to spare.

# page
meadow tortoise
Tortoise: Steady steps beat a long nap.
caption: Tortoise did not boast about the win.

# page
forest hare
Hare: My boast made me far too sure.
caption: He looked back at the warm shade.

# page
meadow tortoise,hare
Tortoise: Fast legs still need to stay on.
Hare: I left the race for a rest.

# page
meadow hare
Hare: That nap was my big mistake.
caption: Hare sat down beside the mark.

# page
meadow tortoise
Tortoise: I am glad we raced today.
caption: Tortoise gave him a small smile.

# page
meadow tortoise,hare
Hare: You won and you were fair.
Tortoise: I just kept going to the end.

# page
meadow hare
Hare: Next time I will not nap.
caption: He said it and he meant it.

# page
forest tortoise,hare
caption: They walked back into the trees.
Tortoise: We can race on a new day.

# page
forest hare
Hare: I will run the whole path.
caption: Hare no longer wanted a nap.

# page
meadow tortoise
Tortoise: A steady pace is my own way.
caption: Tortoise liked the calm walk home.

# page
meadow hare,tortoise
Hare: I can be fast and still stay.
Tortoise: Then the race stays fair for both.

# page
meadow tortoise,hare
caption: A bird met them on the path.
Hare: Tell him the slow one won.

# page
meadow tortoise
Tortoise: Tell him the nap lost the race.
caption: The bird nodded and flew off.

# page
forest tortoise,hare
Hare: I will not boast on the way.
Tortoise: Good, and I will stay steady.

# page
meadow tortoise,hare
caption: They went home side by side.
Tortoise: Steady steps can win a race.
`}),f({id:"aesop-lion-mouse",title:"The Lion and the Mouse",seriesId:"shared-fables",episode:2,genre:"fiction",subgenre:"fable",themes:["kindness","animals"],ladderLevel:6,expectedMinutes:7,stretchEligible:!1,glossary:[u("mercy","Kindness when you could be harsh."),u("gnaw","To chew through something bit by bit."),u("net","A trap made of rope.")],talkAbout:"The mouse was small and still helped. When has a small person helped you?",comprehension:[b("What did the lion do when the mouse woke him?",[["let","He let the mouse go","🤝"],["ate","He ate the mouse","🍽️"],["hid","He hid in a tree","🌳"]],"let","recall"),b("How did the mouse help later?",[["rope","He gnawed the net","🐭"],["roar","He roared louder","📣"],["ran","He ran away","🏃"]],"rope","inference")],source:w("Original retelling of the public-domain fable “The Lion and the Mouse,” attributed to Aesop.",y,D),script:`
# page
savanna lion,mouse
caption: Lion slept in the tall warm grass.
Mouse: I did not see his big paw.

# page
savanna lion,mouse
Lion: Who ran across my paw just now?
Mouse: It was me and I am sorry.

# page
savanna lion,mouse
Lion: A small mouse woke me from sleep.
Mouse: Please do not be harsh with me.

# page
savanna lion,mouse
Mouse: I ask for mercy from you.
Lion: Why should I show you mercy?

# page
savanna mouse
Mouse: I meant no harm on your paw.
caption: The mouse shook in the dry grass.

# page
savanna lion
Lion: You are small but you woke me.
caption: Lion lifted one paw in the air.

# page
savanna lion,mouse
Mouse: Let me go and I can help.
Lion: How can a mouse help a lion?

# page
savanna lion,mouse
Lion: You are too small to be food.
Mouse: Then let me go free today.

# page
savanna lion,mouse
caption: Lion looked at the small mouse.
Lion: Go now and stay out of harm.

# page
savanna mouse
Mouse: Thank you for this kind mercy.
caption: The mouse ran off into the grass.

# page
forest mouse
caption: A bird saw Lion let him go.
Mouse: I will not forget this kind day.

# page
forest mouse
Mouse: One day I may pay him back.
caption: The bird flew off into the trees.

# page
savanna lion
caption: Lion lay back down in the sun.
Lion: A mouse is no meal for me.

# page
savanna lion
caption: Many days passed on the warm grass.
Lion: That mouse is gone from my mind.

# page
forest lion
caption: Thick ropes lay in a hidden net.
Lion: What is this rope across the path?

# page
forest lion
caption: Lion stepped into the rope net.
Lion: This net pulled tight around me.

# page
forest lion
Lion: I cannot pull my legs free.
caption: The net held him down on the ground.

# page
forest lion
Lion: I roar but no help comes.
caption: His loud roar rang through the trees.

# page
forest mouse
caption: The mouse heard that roar far off.
Mouse: That is Lion and he needs help.

# page
forest mouse
Mouse: He let me go on that first day.
caption: The mouse ran toward the loud roar.

# page
forest lion,mouse
Mouse: I came back as I said I would.
Lion: This net is thick and I am stuck.

# page
forest mouse,lion
Mouse: I can gnaw the rope bit by bit.
Lion: Your teeth look small for this net.

# page
forest mouse
caption: The mouse began to gnaw a rope.
Mouse: I will not stop until you are free.

# page
forest lion,mouse
Lion: Keep at it and do not fear.
caption: Bit by bit the net grew loose.

# page
forest mouse
Mouse: One rope is cut and more will go.
caption: His teeth worked on the next rope.

# page
forest lion
Lion: I can move a paw at last.
caption: The net slid off on one side.

# page
forest mouse,lion
Mouse: Stay still so I can reach the knot.
Lion: I will stay still for you.

# page
forest mouse
caption: He kept on until the knot gave way.
Mouse: The net is open on this side.

# page
forest lion,mouse
caption: Lion stood up free of the net.
Lion: You cut each rope that held me.

# page
savanna lion,mouse
Lion: You freed me when I could not move.
Mouse: You showed mercy when you let me go.

# page
savanna lion,mouse
Mouse: Small teeth can still cut a net.
Lion: I did not think a mouse could help.

# page
savanna lion,mouse
caption: They rested in the same patch of shade.
Lion: Small and big can care for each other.

# page
savanna mouse
Mouse: I am glad I came back to you.
caption: The mouse sat close by the big paw.

# page
savanna lion
Lion: Mercy came back to me as help.
caption: Lion bent his head down to the mouse.

# page
forest lion,mouse
caption: A bird saw them safe under the shade.
Lion: Tell no one to set a net here.

# page
forest mouse
Mouse: If a net comes I will gnaw it.
caption: The bird nodded from a high branch.

# page
savanna lion,mouse
Lion: I will watch the grass for ropes.
Mouse: And I will watch the trees for you.

# page
savanna lion
caption: Lion let the mouse stand on his paw.
Lion: You are a friend I can trust.

# page
forest mouse,lion
Mouse: I was scared but you were kind.
Lion: I was angry but I let you go.

# page
savanna lion,mouse
caption: They looked out over the warm grass.
Mouse: A small friend can still save a life.

# page
forest lion
Lion: Next time I will look for a net.
caption: He pawed the spot where ropes had been.

# page
savanna mouse
Mouse: And I will come if you roar.
caption: He found the path back to his den.

# page
forest lion,mouse
Lion: We each had a turn to give help.
Mouse: Kind acts come back to true friends.

# page
savanna lion,mouse
caption: Day ended and they shared the cool shade.
Lion: Go safe and come when I call.
`}),f({id:"jataka-tortoise",title:"The Tortoise Who Let Go",seriesId:"shared-fables",episode:3,genre:"fiction",subgenre:"fable",themes:["kindness","animals"],ladderLevel:7,expectedMinutes:8,stretchEligible:!1,glossary:[u("grip","A firm hold."),u("pond","A small pool of water."),u("reply","To answer someone.")],talkAbout:"The tortoise wanted to reply in the air. When is it wiser to wait before you speak?",comprehension:[b("How did the ducks carry the tortoise?",[["stick","He held a stick in his mouth","🪵"],["bag","In a bag","👜"],["boat","On a boat","⛵"]],"stick","recall"),b("Why did he fall?",[["talk","He opened his mouth to reply","💬"],["rain","Rain pushed him","🌧️"],["sleep","He fell asleep","😴"]],"talk","inference")],source:w("Original retelling of the Kacchapa Jataka, “The Talkative Tortoise,” a public-domain birth story.","https://www.gutenberg.org/ebooks/51880","The old telling has the tortoise fall and die. This version keeps the lesson and lands him safely in a pond. Do not copy the source edition’s wording. Do not brand with Project Gutenberg."),script:`
# page
pond tortoise,duck
Tortoise: This pond is too small for me now.
Duck: Where do you hope to go from here?

# page
pond tortoise,duck
Tortoise: I want a far pond with more room.
Duck: We know a wide pond past the town.

# page
pond duck,tortoise
Duck: We can carry you if you hold still.
Tortoise: How can you carry me through the air?

# page
pond duck,duck
caption: The ducks held a long stick between them.
Duck: Bite the stick and keep it in your mouth.

# page
pond tortoise,duck
Tortoise: I will keep a firm grip on it.
Duck: Your grip must last the whole way.

# page
pond duck,tortoise
Duck: Do not reply to the people below.
Tortoise: I can stay quiet if that keeps me safe.

# page
pond tortoise
Tortoise: I will not open my mouth to reply.
caption: He set his jaw firm on the stick.

# page
sky duck,tortoise
caption: The ducks rose and the pond fell away.
Tortoise: I will keep my mouth shut up here.

# page
sky tortoise,duck
caption: Wind slid past his face as they flew.
Duck: Hold the stick and trust your grip.

# page
sky duck,duck
Duck: We are high over the trees now.
caption: The town below looked small under them.

# page
village tortoise,duck
caption: People in the village looked up at them.
Duck: They see us so you must not talk.

# page
village duck,tortoise
caption: A child pointed up and began to laugh.
caption: Two ducks are lifting a tortoise high.

# page
village tortoise,duck
caption: More people came out of their homes.
Tortoise: They think this trip was not my plan.

# page
village duck,duck
caption: A man called the sight a big joke.
caption: The laughs grew loud under the ducks.

# page
sky tortoise
caption: The tortoise wanted to reply right then.
Tortoise: I must tell them this was my idea.

# page
sky duck,tortoise
Duck: Hold on since we are still high.
caption: His grip was all that kept him up.

# page
sky tortoise
Tortoise: They should know I asked for this ride.
caption: He forgot the warning about a reply.

# page
sky duck
Duck: If you reply you could fall from here.
caption: The duck felt the stick shift a bit.

# page
sky tortoise,duck
Tortoise: I need one short reply for them.
Duck: Not now while your mouth holds the stick.

# page
village tortoise,duck
caption: A boy yelled that the tortoise looked silly.
caption: Those words rose up to his ears.

# page
sky tortoise
Tortoise: I am not silly and I can talk.
caption: Pride swelled in him as the laughs rose.

# page
sky duck,tortoise
Duck: Please keep your grip and stay still.
caption: He opened his mouth to reply.

# page
sky tortoise
caption: The stick slipped from his open mouth.
Tortoise: I only wanted one short reply.

# page
sky duck
Duck: Hold on but he has let go.
caption: The ducks could not catch him in time.

# page
sky tortoise
caption: He fell through the high blue air.
Tortoise: I should have kept my mouth shut.

# page
pond tortoise
caption: A soft pond waited on the ground below.
caption: He landed in it with a big splash.

# page
pond tortoise
Tortoise: I am wet but I am still safe.
caption: The pond held him up like a soft bed.

# page
pond duck,tortoise
Duck: You are safe because the pond caught you.
Tortoise: I wanted the last word in the air.

# page
pond duck,duck
caption: The ducks came down beside the pond.
Duck: We told you not to reply up there.

# page
pond tortoise,duck
Tortoise: Their loud laughs made me need a reply.
Duck: A reply can wait until you land.

# page
pond tortoise
Tortoise: My grip was worth more than my words.
caption: He sat in the mud and shook hard.

# page
pond duck
Duck: You fell because you let go to talk.
caption: He nodded and looked at the wet stick.

# page
pond tortoise,duck
caption: People from the village ran to the pond.
caption: They saw he was wet but not hurt.

# page
pond tortoise,duck
Tortoise: Tell them I am fine and I learned.
Duck: You learned to wait before you speak.

# page
pond duck,tortoise
Duck: We can try the trip another day.
Tortoise: Next time I will not reply up high.

# page
pond tortoise
Tortoise: I will speak when my feet touch ground.
caption: He tapped the mud with one flat foot.

# page
pond duck,duck
Duck: If you keep your grip we can fly.
caption: They held the stick out for him again.

# page
pond tortoise,duck
Tortoise: I am ready and my mouth will stay shut.
Duck: Good, and do not reply to the laughs.

# page
sky tortoise,duck
caption: They rose again and passed over the village.
Tortoise: I hear them but I will not talk.

# page
sky duck
Duck: Your grip is firm and we are glad.
caption: This time his mouth did not open at all.

# page
pond tortoise,duck
caption: They came down at the far wide pond.
Duck: You made it here and you kept still.

# page
pond tortoise
Tortoise: This pond is wide and I like it.
caption: He let go when his feet hit mud.

# page
pond duck,tortoise
Duck: A reply is safe now that you stand.
Tortoise: Thank you for the ride and the lesson.

# page
pond tortoise
caption: He told the ducks what he had learned.
Tortoise: Waiting to speak kept me safe today.

# page
pond duck
caption: A child from town came to the bank.
Duck: He fell once but the pond saved him.

# page
pond tortoise,duck
Tortoise: I do not need the last word now.
caption: The child waved and ran back to town.

# page
pond tortoise,duck
Duck: Friends can lift you but you must help.
Tortoise: My job was the grip and the quiet.

# page
pond tortoise,duck
caption: They rested by the new pond at dusk.
Tortoise: I can talk now and I choose calm.
`}),f({id:"aesop-ant",title:"The Ant and the Grasshopper",seriesId:"shared-fables",episode:4,genre:"fiction",subgenre:"fable",themes:["kindness","animals"],ladderLevel:7,expectedMinutes:8,stretchEligible:!0,glossary:[u("store","To put something away for later."),u("grasshopper","A green insect with long jumping legs."),u("winter","The cold season.")],talkAbout:"The ant shared, and the grasshopper helped afterward. What is a fair way to share work?",comprehension:[b("What did the ant do all summer?",[["food","Stored food","🌾"],["sang","Only sang","🎵"],["slept","Slept all day","😴"]],"food","recall"),b("What happened in winter?",[["share","The ant shared, and the hopper helped","🤝"],["left","The ant left town","🚂"],["melt","The food melted","💧"]],"share","inference")],source:w("Original retelling of the public-domain fable “The Ant and the Grasshopper,” attributed to Aesop.",y,"Many old tellings refuse to share. This one lets the ant share a meal, and the grasshopper helps next. "+D),script:`
# page
meadow ant,hopper
Hopper: Come sing with me while the day is warm.
Ant: I need to store food before winter.

# page
garden ant
caption: The ant lifted a grain and walked on.
Ant: A little each day will fill the nest.

# page
meadow hopper
caption: The grasshopper played and then took a nap.
Hopper: Winter is far so I will not worry.

# page
garden ant,hopper
Ant: You could store a little food too.
Hopper: Work like that is dull and songs are better.

# page
meadow ant
caption: The ant went back to the grain path.
Ant: I will store more before the sun sets.

# page
garden hopper
Hopper: Listen to this new song I made.
caption: The grasshopper jumped from leaf to leaf.

# page
meadow ant,hopper
Ant: Songs are sweet but winter will still come.
Hopper: I can sing now and store food later.

# page
garden ant
caption: Seed by seed the ant filled a corner.
Ant: This store will matter when the field is bare.

# page
meadow hopper
caption: The grasshopper lay in the sun and laughed.
Hopper: There is food all around me today.

# page
garden ant
Ant: The field will not stay full for long.
caption: She did not stop to rest in the shade.

# page
meadow ant,hopper
Hopper: You work while the whole meadow sings.
Ant: I store now so I can eat later.

# page
garden hopper
caption: A bird saw the grasshopper skip the work.
Hopper: Tell the bird I will plan some day.

# page
meadow ant
caption: The bird saw the ant store one more seed.
Ant: Please let me pass so I can keep on.

# page
garden ant,hopper
Ant: Come carry one seed with me now.
Hopper: One seed is too small to fuss about.

# page
meadow hopper
Hopper: I would rather hop and make a song.
caption: He hopped away across the warm grass.

# page
garden ant
caption: The ant shook her head and went on.
Ant: I will store enough for the cold days.

# page
meadow hopper
caption: Noon heat made the grasshopper slow his song.
Hopper: I can nap and the food will wait.

# page
garden ant
Ant: Food does not wait when the plants dry up.
caption: She packed seeds deep inside the nest.

# page
meadow ant,hopper
Hopper: Your nest must be full of dull seeds.
Ant: Full is good when winter locks the field.

# page
meadow ant
caption: All summer the ant kept the same task.
Ant: I store a bit and then I store more.

# page
garden ant,hopper
Ant: The leaves are dry at the field edge.
Hopper: Dry leaves make a fine beat for a song.

# page
garden ant
caption: The ant looked at the thin grain heads.
Ant: I must store these last seeds soon.

# page
meadow ant,hopper
Ant: The air is cool and the songs are thin.
Hopper: I still have hops left in my legs.

# page
garden hopper
caption: The grasshopper found the field picked clean.
Hopper: Where did all the loose grain go?

# page
meadow ant
caption: Cold wind bent the grass around the nest.
Ant: Winter is here and my store is shut in.

# page
garden hopper
Hopper: I am hungry and the ground is hard.
caption: His song came out small in the cold.

# page
meadow hopper
caption: The grasshopper stood at the nest door.
Hopper: I did not store and now I need food.

# page
burrow ant,hopper
Ant: Come in from the cold and sit down.
Hopper: I was wrong to laugh at your work.

# page
burrow ant
caption: The ant set out a small pile of seeds.
Ant: We can share one meal on this cold day.

# page
burrow hopper
Hopper: You would share even after I played?
caption: He ate slowly and looked at the pile.

# page
burrow ant,hopper
Ant: Sharing is kind and the next part is work.
Hopper: Tell me how a grasshopper can help.

# page
burrow hopper
Hopper: I can sweep the floor and sort the seeds.
caption: The grasshopper worked until the nest was tidy.

# page
burrow ant
Ant: That help makes room for more food.
caption: She moved the pile back into the store.

# page
garden ant,hopper
caption: They went out to the cold garden beds.
Hopper: I see a few seeds the wind missed.

# page
garden ant
Ant: Pick them up and we will store them.
caption: The grasshopper filled his arms with seeds.

# page
meadow ant,hopper
Hopper: My arms are small but I can make trips.
Ant: Many small trips can store a lot.

# page
meadow hopper
caption: He did not stop to sing this time.
Hopper: Work first and then a short song is fine.

# page
garden ant,hopper
Ant: Winter is easier when we both plan.
Hopper: I will store a little and still sing.

# page
burrow ant,hopper
caption: They put the new seeds in a dry cup.
Ant: This cup is our store for the next storm.

# page
burrow hopper
Hopper: I can guard the door when the wind hits.
caption: He packed a leaf over the seed cup.

# page
meadow ant,hopper
caption: A bird saw them share the load.
Ant: Tell the bird the grasshopper helps now.

# page
garden hopper
Hopper: I played all summer and that was my miss.
caption: He said it with a calm small voice.

# page
meadow ant
Ant: You help now and that is the fair part.
caption: She passed him a seed without a frown.

# page
garden ant,hopper
Hopper: Play is good and a plan is good too.
Ant: We can keep both if we store in time.

# page
burrow ant,hopper
caption: At night they ate a small shared meal.
Hopper: Thank you for the meal and the chance.

# page
meadow ant,hopper
caption: Morning frost sat on the grass by the nest.
Ant: Winter can be cold and we are still fed.

# page
garden hopper
caption: The grasshopper sang a soft song after the work.
Hopper: The song is better when the store is safe.

# page
meadow ant,hopper
Ant: Next summer I will store and you will help.
Hopper: Yes, and I will still make room for songs.
`}),f({id:"pancha-monkey",title:"The Monkey and the Crocodile",seriesId:"shared-fables",episode:5,genre:"fiction",subgenre:"fable",themes:["kindness","animals"],ladderLevel:8,expectedMinutes:9,stretchEligible:!0,glossary:[u("crocodile","A long reptile that lives in rivers."),u("heart","Here, the monkey's life, which the crocodile wanted."),u("riverbank","The land at the edge of a river.")],talkAbout:"The monkey noticed the danger and thought fast. What is a safe way to leave a friend who is not being safe?",comprehension:[b("What did the crocodile say in the river?",[["heart","He wanted the monkey's heart","💔"],["song","He wanted a song","🎵"],["map","He wanted a map","🗺️"]],"heart","recall"),b("How did the monkey get away?",[["tree","He said his heart was in the tree","🌳"],["swim","He swam across the sea","🌊"],["net","He called a lion","🦁"]],"tree","inference")],source:w("Original retelling of a public-domain Panchatantra tale about a monkey and a crocodile.",v,"The 1925 Ryder translation is in the public domain. This comic does not copy that wording. The wife’s wish is told gently for ages 8–10."),script:`
# page
river monkey,croc
caption: A monkey and a crocodile met on the riverbank.
Monkey: I will share these sweet fruits with you.

# page
river monkey,croc
Crocodile: Your fruit is the best food I get.
Monkey: Take some home if you would like.

# page
forest monkey,croc
caption: They met by the tree on most warm days.
Crocodile: I like this cool spot under your branches.

# page
forest monkey
Monkey: This high fruit is ripe and sweet.
caption: He dropped a soft fruit down to his friend.

# page
river croc,monkey
Crocodile: My home is on the far side of the water.
Monkey: I have never seen that far bank.

# page
river monkey,croc
Monkey: Who waits for you when you leave here?
Crocodile: My wife sits by our door and watches.

# page
forest monkey
caption: The monkey picked a fresh pile for the trip.
Monkey: Take these to her with my good wish.

# page
river croc
caption: The crocodile swam home with fruit on his snout.
Crocodile: She will smile when she sees this gift.

# page
river croc
caption: His wife ate the fruit and then grew quiet.
Crocodile: She wants more than fruit from that tree.

# page
river croc
Crocodile: She says a monkey heart would make her strong.
caption: He stared at the water and did not smile.

# page
forest croc
caption: The next day he lay on the riverbank alone.
Crocodile: He is my friend and she still asked this.

# page
forest croc
Crocodile: If I hide the plan he may come with me.
caption: That choice sat like a stone in his chest.

# page
river monkey,croc
Crocodile: My wife wants to meet you at our home.
Monkey: I would like to meet her some day.

# page
river monkey
Monkey: I cannot swim and the water looks deep.
caption: He took one step back from the wet edge.

# page
river croc,monkey
Crocodile: Ride on my back and hold on tight.
Monkey: Will you keep to a smooth safe path?

# page
river monkey,croc
caption: A bird on the bank watched them talk.
Monkey: I trust you since we share fruit each day.

# page
river croc
Crocodile: Climb on and we will leave the riverbank.
caption: The bird tilted its head and stayed put.

# page
river monkey,croc
caption: The monkey sat down on the wide rough back.
Crocodile: Hold still while I push off from shore.

# page
river croc,monkey
caption: They moved out and the bank grew small.
Monkey: The water is cold around my feet.

# page
river monkey
Monkey: You are very quiet on this trip.
caption: His hands held the rough back a bit tighter.

# page
river croc
Crocodile: The deep part needs all my care.
caption: He slowed where the river ran dark and wide.

# page
river monkey,croc
Monkey: Why did we stop so far from shore?
Crocodile: I have to tell you a hard thing.

# page
river croc,monkey
Monkey: What hard thing can you not say yet?
Crocodile: My wife wants your heart to make her strong.

# page
river monkey
caption: The monkey hid his fear and stayed calm.
Monkey: Oh, my heart is not with me today.

# page
river croc,monkey
Crocodile: Where is your heart if it is not here?
Monkey: I left it in the tree on the riverbank.

# page
river monkey,croc
caption: The crocodile went still, torn and unsure.
Monkey: Take me back so I can fetch it.

# page
river croc
Crocodile: If your heart is there we must go back.
caption: He swung his long tail and turned toward shore.

# page
river monkey,croc
caption: The bird saw them turn in the deep water.
Monkey: Hurry to the tree and I will get it.

# page
forest monkey,croc
caption: At the riverbank the monkey climbed up fast.
Monkey: My heart was in me the whole time.

# page
forest monkey
caption: He stayed up high on a thick branch.
Monkey: I will not ride on your back again.

# page
river croc,monkey
Crocodile: You tricked me and now I have no prize.
Monkey: You hid a plan that would hurt me.

# page
forest monkey,croc
caption: The crocodile could not reach the high branch.
Monkey: A friend does not carry you toward harm.

# page
forest monkey
caption: He threw a fruit down but he stayed up.
Monkey: We can talk from here and I will not cross.

# page
forest monkey,croc
Crocodile: Come down and we can still be friends.
Monkey: Friends do not lead friends into deep water.

# page
forest monkey,croc
caption: The bird hopped near and heard the whole talk.
Monkey: Tell the trees he asked for my heart.

# page
forest croc
Crocodile: I was wrong to hide what she asked.
caption: He kept his eyes on the mud of the bank.

# page
forest monkey
Monkey: Quick thought got me back to this tree.
caption: He patted the branch as if it were home.

# page
river monkey,croc
Monkey: Trust has to be earned on dry ground.
Crocodile: I will not ask you to ride again.

# page
forest monkey
caption: The monkey tossed more fruit but stayed on the limb.
Monkey: Share food with me from this safe spot.

# page
river croc
Crocodile: I can eat here and leave your heart alone.
caption: He let the fruit sit and did not lunge.

# page
forest monkey,croc
Monkey: If you are sorry then show it each day.
Crocodile: I will come to the riverbank and only talk.

# page
river monkey
caption: Days later the crocodile waited under the tree.
Monkey: Stay on the bank and I will come low.

# page
forest monkey,croc
caption: He came down one branch but not to the ground.
Crocodile: I see you are still wise to keep space.

# page
river croc,monkey
Monkey: A safe friend can stand close and still be kind.
Crocodile: I will not reach for you or for your heart.

# page
forest monkey
caption: He dropped fruit into the open mouth below.
Monkey: This is how we share without a ride.

# page
river croc
Crocodile: The ride was my mistake and I own it.
caption: He ate and then backed into the shallow edge.

# page
forest monkey,croc
caption: The bird sang once and flew along the bank.
Monkey: A witness saw the trick and the truth.

# page
river monkey
Monkey: If a plan can hurt me I will step back.
caption: He shook his head at the deep water.

# page
forest croc
Crocodile: I told my wife the heart stays in the tree.
caption: He said it with a low and sorry voice.

# page
river monkey,croc
Monkey: Good, because my heart is mine to keep.
Crocodile: I will not trade a friend for a wish.

# page
river croc,monkey
Crocodile: May I still take fruit home to her?
Monkey: Yes, fruit is a gift and a heart is not.

# page
forest monkey,croc
caption: They made a new rule beside the water.
Monkey: Talk on the bank and do not ride far.

# page
river croc
Crocodile: I agree and I will keep that rule.
caption: He tapped the mud with his tail to mark it.

# page
forest monkey
Monkey: Fast thought and a tall tree saved me.
caption: He smiled down at the crocodile on the bank.

# page
river monkey,croc
caption: The bird watched them share one last fruit.
Crocodile: I am glad you got away from my plan.

# page
forest monkey
Monkey: I am glad I named the tree in time.
caption: He held the branch and let his breath slow.

# page
river croc,monkey
Crocodile: Next time I feel torn I will tell the truth.
Monkey: Truth on the riverbank is safer than a trick.

# page
forest monkey,croc
caption: Late light made a gold path on the water.
Monkey: Go home kind and leave my heart with me.

# page
river croc
Crocodile: I will and I will bring back only thanks.
caption: He slid into the river with no trick left.

# page
forest monkey
caption: He stayed up until the ripples died.
Monkey: A calm mind and a safe seat saved me.
`}),f({id:"pancha-jackal",title:"The Blue Jackal",seriesId:"shared-fables",episode:6,genre:"fiction",subgenre:"fable",themes:["kindness","animals"],ladderLevel:9,expectedMinutes:10,stretchEligible:!1,glossary:[u("jackal","A wild dog that lives in a group."),u("dye","A color that soaks into fur or cloth."),u("pretend","To act like something you are not.")],talkAbout:"The blue color washed off. Why is pretending to be someone else a hard job to keep up?",comprehension:[b("Why did the animals obey at first?",[["blue","He looked like a strange blue king","🔵"],["gold","He paid them gold","💰"],["map","He had a map","🗺️"]],"blue","recall"),b("What showed the truth?",[["rain","Rain washed the dye off","🌧️"],["book","A book told them","📘"],["song","He sang his name","🎵"]],"rain","inference")],source:w("Original retelling of the public-domain Panchatantra tale of the blue jackal.",v,"The 1925 Ryder translation is in the public domain. This comic does not copy that wording."),script:`
# page
night jackal
caption: A hungry jackal crept through the village at night.
Jackal: I need food and these dark lanes are empty.

# page
village jackal
caption: He slipped past a low wall into a yard.
Jackal: I smell a rich pot and I must look.

# page
village jackal
caption: The pot sat in a dark corner of the yard.
Jackal: If I lean in I can reach those scraps.

# page
village jackal
caption: His paws slipped and he fell into blue dye.
Jackal: I cannot see while this dye covers my eyes.

# page
village jackal
caption: He climbed out and blue dye ran off his legs.
Jackal: My fur is blue and it will not wipe off.

# page
night jackal
caption: He ran from the village into the dark trees.
Jackal: If they see this color they may fear me.

# page
forest jackal
caption: A still pool showed a blue face he did not know.
Jackal: That is my face but the color is not mine.

# page
forest jackal
caption: He rubbed his side but the dye stayed put.
Jackal: If I walk out they will not know me.

# page
forest jackal
caption: He sat and thought of a bold way to hide.
Jackal: I could pretend this blue makes me a king.


# page
forest bluejackal
caption: He tried a slow proud walk under the trees.
Bluejackal: If I sound like a king they may not ask.

# page
forest bluejackal
caption: He stood tall and let the dye look like a robe.
Bluejackal: From now on I will not say I am a jackal.

# page
forest bluejackal,lion
Lion: What are you with that strange blue fur?
Bluejackal: I am a new king and you should obey.

# page
forest bluejackal,lion
Lion: You are not a lion and not a plain jackal.
Bluejackal: A blue king does not have to look plain.

# page
forest bluejackal,hare
caption: Hare came close and then stepped back in doubt.
Hare: He looks like a strange blue king to me.

# page
forest bluejackal,hare
Hare: He is blue so maybe he is set over us.
Bluejackal: Yes, and the wise ones will obey at once.

# page
forest bluejackal,monkey
Monkey: I have not seen a king with fur like that.
Bluejackal: Bow now and bring the first share of food.

# page
forest bluejackal,lion,hare
caption: The group was unsure so they chose to obey.
Lion: We will obey until we know what you are.

# page
forest bluejackal,hare
caption: Hare set a big pile of food at his blue feet.
Bluejackal: A king eats first and the rest of you wait.

# page
forest bluejackal
caption: He liked the bows and the best bits of food.
Bluejackal: Keep your eyes low when you speak to me.

# page
forest bluejackal,monkey
Monkey: Where should the rest of us stand and wait?
Bluejackal: Stand back and do not block my new court.

# page
forest bluejackal
caption: He sent word that other jackals must leave the trees.
Bluejackal: Their howls annoy a king so drive them out.

# page
forest jackal
caption: His old group heard the order and went still.
Jackal: He wants to pretend he never ran with us.

# page
forest bluejackal,jackal
Bluejackal: Go now and do not howl near my seat.
Jackal: We will go but this pretend will not hold.

# page
night jackal
caption: The jackals walked off sad under the night trees.
Jackal: He chose a new look over his own kind.

# page
forest bluejackal,lion
Lion: A king who sends his own kind away is odd.
Bluejackal: Do not question me since I am not like them.

# page
forest bluejackal,hare
caption: Hare kept watch on the path as he was told.
Hare: This blue king asks for more food each hour.

# page
forest bluejackal,monkey
Monkey: I will look for fruit but this feels wrong.
Bluejackal: A king does not need your thoughts on it.

# page
forest bluejackal
caption: He made the group hunt while he sat and ate.
Bluejackal: A blue king does not chase his own meals.

# page
night bluejackal,lion
caption: Lion stood near and watched the blue fur in moonlight.
Lion: You will not hunt and you will not share.


# page
forest bluejackal,lion
Lion: A real king would not fear a wash of rain.
Bluejackal: I fear nothing and I will not step down.

# page
forest bluejackal
Bluejackal: Sharing is for the group and not for a king.
caption: He took the best share and pushed the rest away.

# page
forest bluejackal,monkey
caption: Monkey saw blue rub off on the leaves by his seat.
Monkey: Your color is coming off where you sit.

# page
forest bluejackal,monkey
Bluejackal: That is king dust and you will stay quiet.
Monkey: Dust does not stain a leaf the way dye might.

# page
forest bluejackal
Bluejackal: Say dye again and you will leave with the jackals.
caption: Monkey shut his mouth but he did not bow.

# page
forest bluejackal,hare
Hare: If color can rub off then what are you?
Bluejackal: I am your king and the blue is my hide.

# page
night bluejackal,lion
caption: Thick clouds piled up and the night grew heavy.
Lion: Rain is close and your blue may not like it.

# page
forest bluejackal
Bluejackal: No rain can change a king like me.
caption: He lifted his chin and told them to bow again.

# page
night bluejackal,hare,monkey
caption: Rain came down hard and long on the whole group.
Hare: Look at his legs where the blue runs off.

# page
night bluejackal
caption: The dye ran down his legs in thin blue streams.
Bluejackal: Wipe it back on before they see the fur.

# page
night bluejackal,lion
caption: More rain washed the dye off his back and face.
Lion: You are a jackal and the color was only dye.

# page
night jackal,lion
Jackal: I wanted to look like more than I am.
Lion: Pretend can last only until the truth shows.

# page
forest jackal,hare,monkey
caption: The group stepped back and no one bowed to him.
Hare: We did obey a color and not a true king.

# page
forest monkey,jackal
Monkey: The strange blue king was just a dye trick.
Jackal: I fell in dye and then I chose to pretend.

# page
night jackal
caption: He went to find his old group past the trees.
Jackal: They may not want me back at their side.

# page
forest jackal
caption: He found them at the edge of the night wood.
Jackal: I sent you away and that was wrong of me.

# page
forest jackal
caption: They looked at his plain fur and knew the truth.
Jackal: The rain took the dye and left the real me.

# page
forest jackal,lion
caption: Lion came too and stood so all could hear.
Lion: This jackal is not a king and the blue is gone.

# page
forest jackal
caption: They let him walk with them but not in front.
Jackal: I would rather be real than a pretend king.

# page
forest jackal,hare
Hare: You can walk with us if you do not pretend.
Jackal: I will not pretend to be a king again.

# page
forest jackal,monkey
Monkey: A trick color can fool a group for a while.
Jackal: It fooled you and it fooled me most of all.

# page
night jackal,lion
Lion: A true name is better than a fake blue hide.
Jackal: I am a jackal and that is enough for me.

# page
forest jackal
caption: His group passed him a small share of the food.
Jackal: Thank you for a place that is not a throne.

# page
forest jackal,hare
caption: Hare walked beside him but did not bow at all.
Hare: Friends do not need a king to stay kind.

# page
forest jackal,hare
caption: They walked home while the wet leaves shone.
Hare: Stay with us as a jackal and not a mask.

# page
night jackal
caption: The rain slowed and the dye was gone for good.
Jackal: I will tell the truth the next time I slip.

# page
village jackal
caption: He did not go back to the pot of blue dye.
Jackal: That yard taught me how fast a lie can grow.

# page
forest jackal,lion
Lion: The group will trust you if your words stay true.
Jackal: Then I will keep my name and my own fur.

# page
forest jackal
caption: His fur was plain and the blue king was gone.
Jackal: I do not need that dye to have a place.

# page
night jackal,monkey
Monkey: We were wrong to obey a strange blue king.
Jackal: And I was wrong to ask them to obey.

# page
forest jackal
caption: He slept with his group under the dark wet trees.
Jackal: A real jackal in the rain is better than a fake king.
`})],W=["books","friendship"],I=[f({id:"mlc-glow",title:"The Glowing Book",seriesId:"midnight-library",episode:1,genre:"fiction",subgenre:"adventure",themes:W,ladderLevel:5,expectedMinutes:6,stretchEligible:!1,glossary:[u("library","A room full of books you can borrow."),u("glow","A soft light.")],talkAbout:"Would you open a glowing book if a friend stayed with you?",comprehension:[b("What was glowing?",[["book","The book","📘"],["window","The window","🪟"],["lamp","A lamp","💡"]],"book","recall"),b("How do the friends feel at the end?",[["brave","Glad and brave","🤝"],["mad","Mad","😠"],["lost","Lost","😕"]],"brave","inference")],script:`
# page
library mira,dev
Mira: That blue book is glowing.
Dev: I see it on the high shelf.

# page
stacks mira,dev
Mira: The light looks soft and blue.
Dev: Can we get it down?

# page
stacks mira,dev
Mira: I will hold the chair still.
Dev: I can reach the blue book.

# page
library mira,dev
Mira: It feels warm, not hot.
Dev: The glow sits on the cover.

# page
library mira,dev
Mira: Let us open it here.
Dev: I want to read it fast.

# page
night mira,dev
Mira: My eyes skip down the page.
Dev: The blue light is fading.

# page
night mira,dev
Mira: Slow down, the glow is thin.
Dev: I still want the next line.

# page
stacks mira,dev
Mira: Now the book looks dim.
Dev: Fast reading made the glow fade.

# page
library mira,dev
Mira: Let me try one more time.
Dev: I will read even faster.

# page
library mira,dev
Mira: The light is almost gone.
Dev: This way is not working.

# page
stacks mira,dev
Mira: Stop, we need a new plan.
Dev: What if we read slow?

# page
stacks mira,dev
Mira: There is a hard word here.
Dev: Tap it and we can learn.

# page
library mira,dev
Mira: The note says it means glow.
Dev: Glow means a soft light.

# page
library mira,dev
Mira: So the book light is a glow.
Dev: I get it now, thank you.

# page
night mira,dev
Mira: I will read this line slow.
Dev: I will not skip a word.

# page
night mira,dev
Mira: Look, a little glow is back.
Dev: Slow reading brings it home.

# page
library mira,dev
Mira: Let us read the next part.
Dev: One line, then we rest.

# page
library page,mira,dev
Page: I see you found the glow.
Mira: It faded when we went fast.

# page
library page,dev
Page: This book stays in the library.
Dev: May we read it in here?

# page
library page,mira
Page: Yes, it lives on this shelf.
Mira: We will not take it home.

# page
stacks mira,dev
Mira: I will mark our page.
Dev: Use this card so we know.

# page
stacks mira,dev
Mira: The card sits in the book.
Dev: Now we can find our spot.

# page
library mira,dev
Mira: We should put it back.
Dev: The glow can rest here.

# page
night mira,dev
Mira: See you at the library.
Dev: I will come the next day.

# page
library mira,dev
Mira: You came back, I am glad.
Dev: The blue book still glows.

# page
library mira,dev
Mira: Your turn to read first.
Dev: Then you can take a turn.

# page
stacks mira,dev
Dev: I will keep my pace slow.
Mira: I like how the glow holds.

# page
stacks mira,dev
Mira: Now it is my turn.
Dev: I will sit and listen.

# page
night mira,dev
Mira: The story is getting good.
Dev: I feel a yawn coming.

# page
night mira,dev
Mira: If we push on, we may tire.
Dev: Tired eyes skip the words.

# page
library mira,dev
Mira: Let us stop while we are glad.
Dev: I want to feel brave, not worn.

# page
library mira,dev
Dev: We can save the rest.
Mira: The glow will wait for us.

# page
stacks mira,dev
Mira: I am glad we came back.
Dev: I feel brave for going slow.

# page
stacks mira,dev
Mira: Fast was fun, but it failed.
Dev: Slow gave the glow back.

# page
library page,mira
Page: You two look calm and glad.
Mira: We chose to stop in time.

# page
library page,dev
Page: That is a brave kind of stop.
Dev: We will read more next time.

# page
night mira,dev
Mira: The book is on its shelf.
Dev: Our card keeps the place.

# page
night mira,dev
Mira: I am glad you stayed with me.
Dev: I am brave when you are here.

# page
library mira,dev
Mira: The glow is soft again.
Dev: We did not rush the end.

# page
library mira,dev
Mira: I feel glad and brave.
Dev: So do I, my friend.
`}),f({id:"mlc-shelf",title:"The Quiet Shelf",seriesId:"midnight-library",episode:2,genre:"fiction",subgenre:"adventure",themes:W,ladderLevel:5,expectedMinutes:6,stretchEligible:!0,glossary:[u("library","A room full of books you can borrow."),u("shy","Quiet, and not ready to be seen yet.")],talkAbout:"The shy book was turned the wrong way. How do you help someone feel easy to find?",comprehension:[b("What was wrong with the book?",[["back","Its back faced out","📘"],["wet","It was wet","💧"],["gone","It was gone","🚫"]],"back","recall"),b("Why did they turn it around?",[["find","So a reader could find it","👀"],["hide","To hide it","🙈"],["sell","To sell it","💰"]],"find","inference")],script:`
# page
library mira,dev
Mira: This shelf in the library is quiet.
Dev: I hear a tiny tap.

# page
stacks mira,dev
Mira: One book has its back out.
Dev: I cannot see the name.

# page
stacks mira,dev
Mira: It looks like it feels shy.
Dev: A shy book still wants a reader.

# page
library mira,dev
Mira: The back faces the room.
Dev: The name faces the shelf.

# page
library mira,dev
Mira: A little kid is coming.
Dev: She may walk right past it.

# page
stacks mira,dev
Mira: She looked and kept going.
Dev: She missed the shy book.

# page
stacks mira,dev
Mira: We should turn it around.
Dev: Then a reader can find it.

# page
library mira,dev
Mira: Turn it so the name shows.
Dev: I will use two slow hands.

# page
stacks mira,dev
Dev: Now the name faces out.
Mira: It says The Lost Kite.

# page
stacks mira,dev
Mira: The kid might come back.
Dev: Let us leave it this way.

# page
library mira,dev
Mira: Oh no, a bag hit the shelf.
Dev: The shy book spun around.

# page
library mira,dev
Mira: Its back faces out again.
Dev: That bump undid our work.

# page
stacks mira,dev
Mira: We can turn it once more.
Dev: This time we add a sign.

# page
stacks mira,dev
Mira: The sign can say, Look here.
Dev: A small sign may help a kid.

# page
library mira,dev
Mira: I will write it on this card.
Dev: Keep the words big and clear.

# page
library mira,dev
Mira: I set the sign up high.
Dev: Can a little kid see it?

# page
stacks mira,dev
Mira: The kid is back in the row.
Dev: She looks up, not at the book.

# page
stacks mira,dev
Mira: She walked past the shy book.
Dev: The sign is in the wrong spot.

# page
library mira,dev
Mira: Let us move the sign down.
Dev: Put it by the book name.

# page
library mira,dev
Mira: Now the card is at her eyes.
Dev: The name still faces out.

# page
night mira,dev
Mira: We should not stand in the way.
Dev: We can watch from this chair.

# page
night mira,dev
Mira: Here she comes down the row.
Dev: I hope she sees the sign.

# page
stacks mira,dev
Mira: She stopped at the card.
Dev: Her hand is on the book.

# page
stacks mira,dev
Mira: She pulled it from the shelf.
Dev: She found it all by herself.

# page
library mira,dev
Mira: Look at her glad smile.
Dev: The shy book has a reader.

# page
library mira,dev
Mira: She sat and opened page one.
Dev: We did not have to push it.

# page
library mira,dev
Mira: The tap on the shelf stopped.
Dev: I think the book feels seen.

# page
library page,mira
Page: I saw what you did.
Mira: Its back faced out at first.

# page
library page,dev
Page: Why did you turn it?
Dev: So a reader could find it.

# page
stacks page,mira
Page: A shy book can hide its name.
Mira: We made the name easy to see.

# page
stacks mira,dev
Mira: The sign stays on the shelf.
Dev: It tells kids where to look.

# page
night mira,dev
Mira: The library feels kind now.
Dev: One small turn can help.

# page
library mira,dev
Mira: I am glad she found it.
Dev: I was sad when she missed it.

# page
library mira,dev
Mira: The bump was a real setback.
Dev: We did not give up.

# page
stacks mira,dev
Mira: Facing out was the fix.
Dev: The back no longer hides it.

# page
stacks mira,dev
Mira: We can check this shelf again.
Dev: Next time we look for backs.

# page
night mira,dev
Mira: Other books face out fine.
Dev: Only that one was shy.

# page
night mira,dev
Mira: The kid is still reading.
Dev: She looks calm and glad.

# page
library mira,dev
Mira: We can leave the sign up.
Dev: It will help the next reader.

# page
library mira,dev
Mira: The quiet shelf is not a trap.
Dev: A shy book can be found.
`}),f({id:"mlc-door",title:"The Door in the Shelf",seriesId:"midnight-library",episode:3,genre:"fiction",subgenre:"adventure",themes:W,ladderLevel:6,expectedMinutes:7,stretchEligible:!0,glossary:[u("nervous","A fluttery feeling before something new."),u("fable","A very old story that teaches a kind idea."),u("lonely","Feeling alone and wishing for a friend.")],talkAbout:"Dev felt nervous and then glad. When have you felt both?",comprehension:[b("Where did the tiny door lead?",[["garden","A quiet garden","🌿"],["sea","The sea","🌊"],["shop","A shop","🏪"]],"garden","recall"),b("How did Dev feel at first?",[["nervous","A bit nervous","😟"],["angry","Angry","😠"],["bored","Bored","😐"]],"nervous","inference")],script:`
# page
stacks mira,dev
Mira: There is a tiny door here.
Dev: It sits in the low shelf.

# page
stacks mira,dev
Mira: The door is as tall as my hand.
Dev: I feel a bit nervous.

# page
stacks mira,dev
Mira: We can peek and step back.
Dev: I am nervous, but I will try.

# page
stacks mira,dev
Dev: What if it is dark in there?
Mira: Then we close it and leave.

# page
garden mira,dev
Mira: The door leads to a quiet garden.
Dev: I smell rain and old paper.

# page
garden mira,dev
Mira: These plants have pages for leaves.
Dev: I am still a little nervous.

# page
garden mira,dev
Mira: Look at the stone by the path.
Dev: A small book sits all alone.

# page
garden mira,dev
Mira: The cover says it is a fable.
Dev: A fable is a very old story.

# page
garden mira,dev
Mira: This fable may teach a kind idea.
Dev: Can we sit and read a bit?

# page
garden mira,dev
Mira: Yes, the stone makes a good seat.
Dev: My nervous feeling is a bit less.

# page
garden mira,dev
Dev: The first line is about a bird.
Mira: The bird has no friend at all.

# page
garden mira,dev
Mira: The bird feels lonely in the tree.
Dev: Lonely means it wants a friend.

# page
garden mira,dev
Mira: Day after day, the bird waits.
Dev: No one stops under the tree.

# page
garden mira,dev
Mira: Then a small kid looks up.
Dev: The kid says, I will sit too.

# page
garden mira,dev
Mira: The bird is not lonely now.
Dev: A friend was all it needed.

# page
garden mira,dev
Dev: I was nervous at the door.
Mira: And now you look glad.

# page
garden mira,dev
Mira: This fable fits our club.
Dev: The club can be a kind place.

# page
garden mira,dev
Dev: A place for a kid who feels lonely.
Mira: We can save that idea.

# page
garden mira,dev
Mira: Let us read one more page.
Dev: I like this quiet garden.

# page
night mira,dev
Mira: Do you hear that bell?
Dev: It rings from the far door.

# page
night mira,dev
Mira: The bell means we should go.
Dev: But the fable is not done.

# page
night mira,dev
Mira: We must not stay past the bell.
Dev: I wish we had more time.

# page
night mira,dev
Mira: We can mark the page and leave.
Dev: Will the garden still be here?

# page
garden mira,dev
Mira: Yes, the tiny door will wait.
Dev: Then I can close the book.

# page
garden mira,dev
Dev: The path back looks dim now.
Mira: Stay by me and walk slow.

# page
garden mira,dev
Mira: The bell rings a second time.
Dev: I feel nervous all over again.

# page
stacks mira,dev
Mira: Here is the shelf with the door.
Dev: I see the room we know.

# page
stacks mira,dev
Mira: Shut the tiny door with care.
Dev: We left when the bell rang.

# page
stacks mira,dev
Dev: I am glad we went in.
Mira: Nervous can sit next to brave.

# page
library mira,dev
Mira: What should we tell the club?
Dev: A lonely kid needs a seat.

# page
library page,mira
Page: You two are back on time.
Mira: The bell sent us out.

# page
library page,dev
Page: How did you feel at first?
Dev: I felt nervous at the door.

# page
library page,mira
Page: And where did the door lead?
Mira: It led to a quiet garden.

# page
library mira,dev
Dev: We found a fable in there.
Mira: It was about a lonely bird.

# page
library page,dev
Page: What did the fable teach you?
Dev: A friend can ease a lonely day.

# page
library mira,dev
Mira: Our club can be that friend.
Dev: We can save a chair for a kid.

# page
stacks mira,dev
Mira: We can put a note on it.
Dev: The note can say, Sit with us.

# page
stacks mira,dev
Mira: If a kid feels lonely, they can sit.
Dev: No one has to read alone.

# page
night mira,dev
Mira: I am glad you came with me.
Dev: I was nervous, then I was glad.

# page
night mira,dev
Dev: Next time I may knock first.
Mira: And we will still mind the bell.

# page
library mira,dev
Mira: The fable stays in the garden.
Dev: The idea comes back with us.

# page
library mira,dev
Mira: A club is more than a door.
Dev: It is a place to be with friends.

# page
stacks page,mira
Page: I like the chair plan.
Mira: We will keep the seat free.

# page
library mira,dev
Dev: I feel glad, not nervous now.
Mira: We can go home on time.
`}),f({id:"mlc-map",title:"The Map That Folded",seriesId:"midnight-library",episode:4,genre:"fiction",subgenre:"adventure",themes:W,ladderLevel:6,expectedMinutes:7,stretchEligible:!1,glossary:[u("library","A room full of books you can borrow."),u("blank","Empty, with nothing drawn yet.")],talkAbout:"The map worked only when Mira and Dev held it together. What is something you do better with a friend?",comprehension:[b("When did the map show the room?",[["both","When both friends held it","🤝"],["one","When one left","🚶"],["dark","Only at noon","☀️"]],"both","recall"),b("Why did the lines fade?",[["apart","They let go of each other","👋"],["rain","Rain washed them","🌧️"],["ink","The ink was bad","🖊️"]],"apart","inference")],script:`
# page
library mira,dev
Mira: This map from the book is blank.
Dev: It had lines the last time.

# page
library mira,dev
Mira: I hold it and I see no room.
Dev: Let me try it on my own.

# page
library mira,dev
Dev: Still blank when I hold it.
Mira: One pair of hands is not enough.

# page
stacks mira,dev
Mira: Come hold the other side.
Dev: We can try it as a team.

# page
stacks mira,dev
Dev: Look, the lines came back.
Mira: The map shows the library now.

# page
stacks mira,dev
Mira: A star marks a small room.
Dev: The room is past the tall stacks.

# page
library mira,dev
Mira: Let us walk and keep our hold.
Dev: I will not let my side go.

# page
night mira,dev
Dev: The line turns at this shelf.
Mira: It points to a low door.

# page
night mira,dev
Dev: I want to point at the star.
Mira: If you let go, wait.

# page
stacks mira,dev
Dev: I let go for one second.
Mira: The lines fade when we let go.

# page
stacks mira,dev
Dev: It is blank in my hands.
Mira: Grab your side and hold still.

# page
library mira,dev
Dev: The lines are back again.
Mira: The map needs both of us.

# page
stacks mira,dev
Mira: It shows the room when both hold it.
Dev: So we walk as one pair.

# page
stacks mira,dev
Dev: Left path or right path?
Mira: The line goes to the left.

# page
night mira,dev
Mira: I will check the right just in case.
Dev: Do not drop the map.

# page
night mira,dev
Dev: You went too far ahead.
Mira: I still have my side.

# page
stacks mira,dev
Dev: My side went slack and blank.
Mira: I cannot see you now.

# page
stacks mira,dev
Mira: Dev, say my name if you hear me.
Dev: I hear you, but I see shelves.

# page
library mira,dev
Mira: Stay where you are and keep talking.
Dev: I am by a red chair.

# page
night mira,dev
Mira: I do not see a red chair.
Dev: Then we are split in the stacks.

# page
stacks mira,dev
Mira: The map is blank while we are apart.
Dev: Apart means the lines will not show.

# page
stacks mira,dev
Dev: Follow my voice, not a guess.
Mira: I am walking to the sound.

# page
night mira,dev
Mira: I see your hand past the books.
Dev: Take the map with me.

# page
night mira,dev
Dev: We both hold it once more.
Mira: The lines come back at once.

# page
library mira,dev
Mira: There you are, I am glad.
Dev: We got lost when we split.

# page
library mira,dev
Dev: Now the star is bright again.
Mira: It leads to the low door.

# page
stacks mira,dev
Mira: Keep both hands on the map.
Dev: I will not point and drop it.

# page
stacks mira,dev
Dev: The door is right here.
Mira: The star sits on this spot.

# page
night mira,dev
Mira: Inside is a round table.
Dev: Two chairs, one for each of us.

# page
night mira,dev
Mira: A card on the table says Club.
Dev: The library saved us a place.

# page
library mira,dev
Dev: We can sit if we still hold it.
Mira: Or we set it down as a pair.

# page
library mira,dev
Mira: We are in the nook now.
Dev: We can fold it with both hands.

# page
stacks mira,dev
Dev: If I drop my side, we get lost.
Mira: So we keep hold until we are out.

# page
stacks mira,dev
Mira: Let us read one short page here.
Dev: Then we leave on the same path.

# page
night mira,dev
Mira: This nook is calm and quiet.
Dev: I like that we found it together.

# page
night mira,dev
Mira: Time to hold the map and go.
Dev: Left side for me, right for you.

# page
library mira,dev
Mira: The lines stay while we hold on.
Dev: I see the main room ahead.

# page
library mira,dev
Dev: We are out and still a pair.
Mira: Now we can fold the map.

# page
stacks mira,dev
Mira: Blank paper, until we need it.
Dev: It works when both of us hold it.

# page
stacks mira,dev
Dev: I will not run off again.
Mira: We find each other with the map.

# page
library mira,dev
Mira: The nook can be our club spot.
Dev: We will share the way in.

# page
library page,mira
Page: You both look glad and calm.
Mira: The map was blank until we held it.

# page
library page,dev
Page: Why did the lines fade?
Dev: They fade when we let go.

# page
night mira,dev
Mira: Next time we hold it the whole way.
Dev: A folded map can still help.
`}),f({id:"mlc-bell",title:"The Night Bell",seriesId:"midnight-library",episode:5,genre:"fiction",subgenre:"adventure",themes:W,ladderLevel:7,expectedMinutes:8,stretchEligible:!1,glossary:[u("library","A room full of books you can borrow."),u("bell","A small cup of metal that rings.")],talkAbout:"The bell rang because a story wanted a listener. Who do you like to read to?",comprehension:[b("What made the bell stop?",[["read","They read the story aloud","📖"],["hid","They hid the bell","🙈"],["ran","They ran away","🏃"]],"read","recall"),b("Why did the bell ring?",[["hear","A story needed someone to hear it","🔔"],["lunch","It was lunch time","🥪"],["fire","There was a fire","🔥"]],"hear","inference")],script:`
# page
night mira,dev
Mira: A bell is ringing over the door.
Dev: We did not touch the bell.

# page
night mira,dev
Mira: It rings, and then it waits.
Dev: The library is still and dim.

# page
library mira,dev
Mira: Maybe it wants us to follow.
Dev: Let us walk to the sound.

# page
library mira,dev
Dev: The sound is soft, then hard.
Mira: It comes from the low stacks.

# page
stacks mira,dev
Mira: I see a stool by the wall.
Dev: A picture book lies open there.

# page
stacks mira,dev
Mira: The bell rings when we walk past.
Dev: It slows when we stop to look.

# page
stacks mira,dev
Dev: What if the book is the cause?
Mira: The bell sits on the book.

# page
library mira,dev
Mira: No one is here to hear it.
Dev: A story may need a kid.

# page
library page,mira
Page: That bell marks a lost story.
Mira: Lost how, if the book is here?

# page
library page,dev
Page: It has no kid to hear it.
Dev: So the bell is asking us.

# page
library page,mira
Page: It is not a fire bell.
Mira: And it is not lunch time.

# page
stacks mira,dev
Mira: We could hide the bell now.
Dev: Then the loud noise might stop.

# page
stacks mira,dev
Dev: I put it under this cloth.
Mira: The cloth is thick and soft.

# page
stacks mira,dev
Mira: It rings harder under the cloth.
Dev: Hiding it was a bad plan.

# page
night mira,dev
Dev: Let me try this box next.
Mira: A box may block the sound.

# page
night mira,dev
Mira: Now the bell rings even harder.
Dev: Take it out of the box.

# page
library mira,dev
Mira: Hiding the bell makes it worse.
Dev: We need a new kind of plan.

# page
library mira,dev
Dev: Page said it needs a kid to hear.
Mira: Then we should read the story.

# page
stacks mira,dev
Mira: I will read the first lines aloud.
Dev: I will sit and hear each word.

# page
stacks mira,dev
Dev: The bell is a bit softer.
Mira: Keep going and do not rush.

# page
library mira,dev
Mira: It is about a boat at sea.
Dev: A paper star shows the way.

# page
library mira,dev
Dev: Let me read the next page.
Mira: Read it aloud so we both hear.

# page
night mira,dev
Dev: The star leads the boat by night.
Mira: The bell is soft, but not done.

# page
night mira,dev
Mira: I want to skip to the end.
Dev: If we skip, it may ring again.

# page
stacks mira,dev
Mira: I skipped two lines just now.
Dev: Hear that, the bell got loud.

# page
stacks mira,dev
Mira: I will go back and read them.
Dev: Each line has to be heard.

# page
library mira,dev
Dev: The boat can see the dock now.
Mira: The star was right all along.

# page
library mira,dev
Mira: On the last page, the boat rests.
Dev: Listen now, the bell has stopped.

# page
library page,mira
Page: A story rests when a kid hears it.
Mira: We read the whole book aloud.

# page
library page,dev
Page: Why did the bell ring at all?
Dev: A story needed a kid to hear it.

# page
night mira,dev
Mira: Reading aloud made the bell stop.
Dev: Hiding it only made it worse.

# page
night mira,dev
Mira: We should read it to Page too.
Dev: She can be the next to hear.

# page
library page,mira
Page: I would like to hear it.
Mira: Then sit with us by the stool.

# page
library page,dev
Dev: I will start at the first line.
Page: I am glad to be the one.

# page
stacks page,mira
Mira: The boat is lost, but not for long.
Page: The paper star is a kind guide.

# page
stacks page,dev
Dev: Now the boat finds the dock.
Page: And the bell stays still for us.

# page
library mira,dev
Mira: Who should hear it next time?
Dev: The little kid by the desk.

# page
library mira,dev
Dev: She likes boats and night stars.
Mira: We can ask her after school.

# page
night page,mira
Page: A bell is a call, not a warning.
Mira: We will bring a kid to hear.

# page
night page,dev
Page: Do not hide it if it rings.
Dev: We will read the story aloud.

# page
library mira,dev
Mira: I will write her name on a card.
Dev: The card can mark the stool.

# page
library mira,dev
Dev: Next bell, we will not be scared.
Mira: We know what the sound means.

# page
stacks mira,dev
Mira: The picture book can stay here.
Dev: The library will keep it safe.

# page
stacks mira,dev
Mira: I am glad we stayed to read.
Dev: The night bell is quiet now.

# page
library mira,dev
Mira: One story, one kid, one calm bell.
Dev: That is a good club rule.

# page
library page,dev
Page: You chose a kind next step.
Dev: The kid will hear it from us.

# page
night mira,dev
Mira: We can put the bell back.
Dev: It can rest until it is needed.

# page
night mira,dev
Mira: If it rings, we read aloud.
Dev: And a kid will be there to hear.
`}),f({id:"mlc-page",title:"The Missing Page",seriesId:"midnight-library",episode:6,genre:"fiction",subgenre:"adventure",themes:W,ladderLevel:7,expectedMinutes:8,stretchEligible:!0,glossary:[u("blank","Empty, with no words yet."),u("lantern","A light you can carry."),u("fair","Kind and even for the people in it.")],talkAbout:"The last page stayed blank until they chose a fair ending. What would you have written?",comprehension:[b("What was missing?",[["page","The last page of words","📄"],["door","The library door","🚪"],["cat","A cat","🐱"]],"page","recall"),b("Which choice brought the words back?",[["share","Share the lantern","💡"],["hide","Hide the light","🙈"],["break","Break the lantern","💥"]],"share","inference")],script:`
# page
library mira,dev
Mira: This story stops before the end.
Dev: The last page is fully blank.

# page
library mira,dev
Mira: The last page of words is missing.
Dev: I see no ink on it at all.

# page
stacks mira,dev
Mira: Let us search the desk first.
Dev: I will check the floor too.

# page
stacks mira,dev
Dev: No loose page under the desk.
Mira: The blank page is still blank.

# page
library mira,dev
Mira: Maybe the words fell out here.
Dev: I see a scrap by the chair.

# page
library mira,dev
Mira: The scrap says, Hide the light.
Dev: That ending sounds mean to me.

# page
stacks mira,dev
Dev: That mean end is not my pick.
Mira: Let us keep looking for the real page.

# page
stacks mira,dev
Mira: Check the book beside this one.
Dev: I feel a card in the back.

# page
night mira,dev
Dev: This card was used as a bookmark.
Mira: The bookmark is full of words.

# page
night mira,dev
Mira: These are the missing last words.
Dev: They tell of a dark wood.

# page
library mira,dev
Mira: A hero stands with one lantern.
Dev: The lantern is her only light.

# page
library mira,dev
Dev: Two paths wait, and both look hard.
Mira: One path is safe if she keeps it.

# page
stacks mira,dev
Mira: The other path has a lost child.
Dev: If she keeps the lantern, the child waits.

# page
stacks mira,dev
Dev: Let me press the bookmark on the page.
Mira: The words will not stick to it.

# page
library mira,dev
Mira: The page is blank once I let go.
Dev: The bookmark is not the fix.

# page
library page,mira
Page: Some endings wait for a fair choice.
Mira: What does fair mean in this tale?

# page
library page,dev
Page: Fair means both people get care.
Dev: So one light for two is fair.

# page
library mira,dev
Mira: She could hide the light and run.
Dev: Then the child stays in the dark.

# page
night mira,dev
Dev: Or she could break the lantern.
Mira: Then no one has any light.

# page
night mira,dev
Mira: Hide and break are both mean.
Dev: A fair end would share the lantern.

# page
stacks mira,dev
Mira: What if we try the mean one first?
Dev: Just to see if ink comes back.

# page
stacks mira,dev
Dev: I will say, Hide the light.
Mira: The blank page does not change.

# page
library mira,dev
Mira: Now we say, Break the lantern.
Dev: Still no words, still a blank page.

# page
library mira,dev
Dev: Mean choices do not bring ink.
Mira: We should try the fair one.

# page
night mira,dev
Mira: I will say the choice out loud.
Dev: Share the lantern, and walk slow.

# page
night mira,dev
Dev: Look, the ink is coming back.
Mira: The blank page is filling up.

# page
library mira,dev
Mira: She shares the lantern with the child.
Dev: Each of them holds half the glow.

# page
library mira,dev
Dev: They reach the town gate side by side.
Mira: The lantern is dim, but it lasts.

# page
stacks mira,dev
Mira: The last line thanks the reader.
Dev: Our fair idea brought the words.

# page
stacks mira,dev
Dev: Share the lantern was the right pick.
Mira: Hide and break left the page blank.

# page
library page,mira
Page: You chose a fair ending today.
Mira: We wrote it as a team.

# page
library page,dev
Page: The words came back for a reason.
Dev: We shared the lantern in the tale.

# page
night mira,dev
Mira: A blank page can wait for a choice.
Dev: It asked us what would be fair.

# page
night mira,dev
Mira: I am glad we did not rush it.
Dev: A mean end would have felt wrong.

# page
library mira,dev
Mira: Let us read the new last page.
Dev: I will read the first new line.

# page
library mira,dev
Dev: The hero does not leave the child.
Mira: She shares, and they both get home.

# page
stacks mira,dev
Mira: We should write our names on a note.
Dev: The note can say we chose fair.

# page
stacks mira,dev
Dev: A kid can choose the fair end too.
Mira: We will leave the tale as it is.

# page
library mira,dev
Mira: The bookmark can go back in the book.
Dev: It is a spare, not the real end.

# page
library mira,dev
Mira: I like that the child is safe too.
Dev: Fair light is better than a mean win.

# page
night mira,dev
Mira: No one had to break the lantern.
Dev: No one had to hide the light.

# page
night mira,dev
Dev: Share was the choice that worked.
Mira: The words came back for that.

# page
library page,dev
Page: Put the book on the shelf with care.
Dev: The last page of words is here now.

# page
library mira,dev
Mira: We can tell the club this tale.
Dev: Fair endings are worth the wait.

# page
stacks mira,dev
Mira: The blank page made me mad at first.
Dev: The search took a long time.

# page
stacks mira,dev
Dev: The mean scrap was a trap.
Mira: We did not fall for it.

# page
night mira,dev
Mira: I feel calm now that it is done.
Dev: The lantern tale has a good end.

# page
night mira,dev
Dev: Next book, we look for a fair end.
Mira: And we will not break a thing.
`}),f({id:"mlc-lamp",title:"The Last Lamp",seriesId:"midnight-library",episode:7,genre:"fiction",subgenre:"adventure",themes:W,ladderLevel:8,expectedMinutes:9,stretchEligible:!1,glossary:[u("library","A room full of books you can borrow."),u("ribbon","A thin strip of cloth."),u("outage","A time when the lights go out.")],talkAbout:"The ribbon was a small light, but it was enough to lead Page to the door. When has a small help been enough?",comprehension:[b("Why was the library dark?",[["out","The lamp went out","💡"],["paint","Someone painted it","🎨"],["noon","It was noon","☀️"]],"out","recall"),b("How did they help Page?",[["glow","The ribbon glow led her out","🎀"],["shout","They shouted at her","📣"],["hide","They hid the door","🚪"]],"glow","inference")],script:`
# page
night mira,dev
Mira: Rain taps on the library windows.
Dev: The big lamp just clicked off.

# page
night mira,dev
Mira: I cannot see the shelves at all.
Dev: This is an outage, not noon.

# page
library mira,dev
Dev: No one painted the room dark.
Mira: The lamp went out, that is all.

# page
library mira,dev
Mira: The lights may stay off a while.
Dev: We need a small light to read.

# page
stacks mira,dev
Mira: The club book is on this shelf.
Dev: The ribbon in it still glows.

# page
stacks mira,dev
Dev: Let me pull the ribbon free.
Mira: Hold it up like a small moon.

# page
library mira,dev
Mira: It shows one shelf at a time.
Dev: We can share this small light.

# page
library mira,dev
Dev: Your turn to hold the ribbon.
Mira: Then I will pass it back to you.

# page
night mira,dev
Mira: We can read a chapter like this.
Dev: I want to race to the end.

# page
night mira,dev
Mira: If we rush, we may miss a line.
Dev: Fine, we will take turns and go slow.

# page
stacks mira,dev
Dev: I will read the first page.
Mira: I will hold the ribbon still.

# page
stacks mira,dev
Mira: Now I read, and you hold the glow.
Dev: The ribbon glow is small but clear.

# page
library mira,dev
Dev: This part is good, do not skip.
Mira: I will not rush the chapter.

# page
library page,mira
Page: I am by the tall shelf.
Mira: We hear you, what is wrong?

# page
stacks page,mira
Page: I lost the door in the dark.
Mira: Stay there, we will come to you.

# page
night page,dev
Dev: Keep your hands on the books.
Page: I am glad to hear your voice.

# page
library mira,dev
Mira: We should help Page get out first.
Dev: We can mark the chapter and go.

# page
stacks mira,dev
Dev: The ribbon shows a narrow path.
Mira: Step only where the glow falls.

# page
stacks mira,dev
Mira: Page, take my arm and walk slow.
Dev: I will hold the ribbon high.

# page
night page,dev
Page: I can see my shoes now.
Dev: The ribbon glow will lead you.

# page
library mira,dev
Mira: A chair leg is in the way.
Dev: Wait, I will move it aside.

# page
library page,mira
Page: I almost tripped on that leg.
Mira: We will go even slower now.

# page
night mira,dev
Dev: I tried to rush and the glow dipped.
Mira: Slow steps keep the ribbon bright.

# page
night page,mira
Page: Do not shout, I can hear you.
Mira: We will not shout or hide the door.

# page
stacks mira,dev
Mira: The door is ten steps ahead.
Dev: Count them with me, slow and loud.

# page
stacks page,dev
Page: One, two, three, I see a shine.
Dev: That shine is the door handle.

# page
library page,mira
Page: Four, five, six, the air feels new.
Mira: We are close, so count the rest.

# page
library page,dev
Dev: The door handle is in your hand.
Page: Fresh air, you two kept me safe.

# page
night mira,dev
Mira: The ribbon glow led you out.
Dev: A small light was enough for Page.

# page
night page,mira
Page: Thank you for not leaving me.
Mira: The club can be a light too.

# page
library mira,dev
Dev: The lamp is still out in there.
Mira: We can go back and read.

# page
library mira,dev
Mira: Our chapter is waiting for us.
Dev: We take turns, and we do not rush.

# page
stacks mira,dev
Dev: Your turn to hold the ribbon now.
Mira: I will read this page in full.

# page
stacks mira,dev
Mira: Now you read, and I hold the glow.
Dev: I like this slow way better.

# page
night mira,dev
Dev: I almost skipped a line again.
Mira: Go back, the outage can wait.

# page
night mira,dev
Mira: The line you skipped had the clue.
Dev: I am glad you made me stop.

# page
library mira,dev
Mira: Two pages left in the chapter.
Dev: We can do them one by one.

# page
library mira,dev
Dev: I will not race the last page.
Mira: Read it like the door walk.

# page
stacks mira,dev
Mira: The hero finds the path at last.
Dev: That is the end of the chapter.

# page
stacks mira,dev
Dev: We got there without a rush.
Mira: The ribbon is still glowing soft.

# page
night page,dev
Page: I can see you from the door.
Dev: The outage is not over yet.

# page
night page,mira
Page: Come out if your eyes are tired.
Mira: We just have to put the book back.

# page
library mira,dev
Mira: The ribbon goes back in the book.
Dev: We do not need it in our pockets.

# page
library mira,dev
Dev: Look, the lamp is coming back on.
Mira: It holds a steady glow this time.

# page
stacks mira,dev
Mira: The library is bright again now.
Dev: The outage did not last all night.

# page
stacks page,mira
Page: When the lamp returns, we check the room.
Mira: The chair is back by the table.

# page
library page,dev
Page: You led me with a ribbon glow.
Dev: We shared it and took our turns.

# page
library mira,dev
Mira: Small help was enough for the walk.
Dev: And enough for the whole chapter.

# page
night mira,dev
Mira: I am glad we stayed slow.
Dev: I feel brave in the dark now.

# page
night mira,dev
Dev: Next outage, we know what to do.
Mira: Share the light and take turns.

# page
library mira,dev
Mira: We should tell the club the plan.
Dev: A ribbon can be a night tool.

# page
library page,mira
Page: Keep the ribbon in the club book.
Mira: We will, so the next pair can use it.

# page
stacks mira,dev
Dev: I liked the slow chapter a lot.
Mira: The plot made sense when we did not skip.

# page
stacks mira,dev
Mira: Page is safe at the main door.
Dev: The ribbon glow did that job.

# page
night mira,dev
Mira: Noon was bright, this was not noon.
Dev: And no one painted the walls.

# page
night mira,dev
Dev: The lamp went out, and we stayed calm.
Mira: That is the story I will tell.

# page
library mira,dev
Mira: Our chapter card is in the book.
Dev: We can start the next one by day.

# page
library mira,dev
Dev: I do not need to race ahead.
Mira: Slow light still gets you there.

# page
stacks page,dev
Page: You two were a good team tonight.
Dev: The library felt kind in the dark.

# page
library mira,dev
Mira: I am glad we had the ribbon.
Dev: A small glow can lead the way.
`}),f({id:"mlc-waited",title:"The Story That Waited",seriesId:"midnight-library",episode:8,genre:"fiction",subgenre:"adventure",themes:W,ladderLevel:8,expectedMinutes:9,stretchEligible:!0,glossary:[u("dusty","Covered in soft grey dust."),u("invite","To ask someone to join you."),u("patient","Able to wait without being unkind.")],talkAbout:"The book had waited a long time for a new listener. Is there a story you would like to share with someone?",comprehension:[b("What did the card inside the book ask?",[["read","Read me to someone new","📖"],["burn","Burn the book","🔥"],["sell","Sell the book","💰"]],"read","recall"),b("Why did they invite Page?",[["hear","The book wanted a new listener","👂"],["fix","Page had to fix the roof","🏠"],["race","They wanted a race","🏁"]],"hear","inference")],script:`
# page
stacks mira,dev
Mira: This hold shelf has one wide book.
Dev: It looks dusty on the top.

# page
stacks mira,dev
Dev: No one has pulled it in a long time.
Mira: It has been waiting for us.

# page
library mira,dev
Mira: The pages smell like old rain.
Dev: There is a card in the front.

# page
library mira,dev
Mira: The card says, Read me to a new friend.
Dev: Not burn it, and not sell it.

# page
library mira,dev
Dev: It has been patient for so long.
Mira: We should not rush past a patient book.

# page
stacks mira,dev
Mira: A kid is reaching for our book.
Dev: Her hand is on the dusty cover.

# page
stacks mira,dev
Dev: Wait, that book is on hold for us.
Mira: She does not see a hold card.

# page
library page,mira
Page: Let me see the slip in the back.
Mira: We put our names on it last week.

# page
library page,dev
Page: A hold means the book waits for you.
Dev: So no one else should take it home.

# page
library page,mira
Page: She can read it after your turn.
Mira: We will not grab it from her hands.

# page
stacks mira,dev
Dev: I feel mad that she touched it.
Mira: Page said to wait, so we wait.

# page
stacks mira,dev
Mira: Waiting is hard when we want it now.
Dev: A patient kid does not yank.

# page
night mira,dev
Dev: She put it back on the hold shelf.
Mira: Good, our dusty book is still there.

# page
night mira,dev
Mira: Do we read it now or wait more?
Dev: Our hold starts today, Page said so.

# page
library page,dev
Page: You may take it for this week.
Dev: Thank you for trusting our hold.

# page
library mira,dev
Mira: I feel trusted with this book.
Dev: We will treat it with care.

# page
stacks mira,dev
Dev: Let me wipe the dust with a cloth.
Mira: The cover looks less dusty now.

# page
stacks mira,dev
Mira: The card still says to read it out.
Dev: Read me to a new friend, it says.

# page
library mira,dev
Mira: Who can we invite to hear it?
Dev: The book wants a new kid to hear.

# page
library mira,dev
Dev: Should we invite Page to sit?
Mira: Yes, she is new to this tale.

# page
library page,mira
Mira: Page, may we invite you to hear?
Page: I would like that, let me sit.

# page
library page,dev
Page: Did you need me to fix the roof?
Dev: No, and we do not want a race.

# page
night page,mira
Mira: We invite you so a new kid can hear.
Page: Start at the first line, even if slow.

# page
night page,dev
Dev: Once, a bridge waited for a walker.
Page: I like this patient kind of start.

# page
library mira,dev
Mira: The walker was afraid of the gap.
Dev: The bridge did not rush that walker.

# page
library page,mira
Page: The bridge was patient, just like this book.
Mira: It waited for the right feet.

# page
stacks mira,dev
Dev: The walker took one board at a time.
Mira: That is why this book could wait.

# page
stacks page,dev
Page: A patient story is still alive.
Dev: We did not need to burn it.

# page
library mira,dev
Mira: And we would not sell a book like this.
Dev: We read it, just as the card asked.

# page
library page,mira
Page: I am glad you let me hear it.
Mira: The card asked for a new friend.

# page
night mira,dev
Dev: We can put a fresh card in the box.
Mira: The fresh card can say, Ask a new friend.

# page
night mira,dev
Mira: Next week this book will not be dusty.
Dev: A new kid can hear it then.

# page
library mira,dev
Dev: Waiting was not the same as being left.
Mira: The hold kept it safe for us.

# page
library mira,dev
Mira: I felt trusted when we got our turn.
Dev: We did not grab it from the other kid.

# page
stacks page,dev
Page: I think of the bridge when I get stuck.
Dev: Then the story did its work.

# page
stacks mira,dev
Mira: The dusty smell is almost gone.
Dev: We can invite one more kid next time.

# page
library mira,dev
Mira: Our names stay on the hold slip.
Dev: When the week ends, we bring it back.

# page
library page,mira
Page: You were patient with the other kid.
Mira: She can have a turn after us.

# page
night mira,dev
Dev: I was sad when her hand touched it.
Mira: Then Page told us what a hold means.

# page
night mira,dev
Mira: That talk was the help we needed.
Dev: We waited, and we felt trusted.

# page
library mira,dev
Mira: The walker is on the last board.
Dev: The gap is not so wide now.

# page
library page,dev
Page: The bridge held for the slow walker.
Dev: His patient steps got him across.

# page
stacks mira,dev
Mira: That is the end of the tale.
Dev: We read it all to a new friend.

# page
stacks mira,dev
Dev: The card can stay in the front.
Mira: It still asks for a new friend.

# page
night mira,dev
Mira: Look, the other kid is back.
Dev: She may want the book again.

# page
night page,mira
Page: I can tell her how a hold works.
Mira: Please do, so she does not feel shut out.

# page
library page,dev
Page: This book is on hold until next week.
Dev: You can hear the tale with us now.

# page
library mira,dev
Mira: We invite you to hear the end.
Dev: Then the book gets one more new friend.

# page
stacks mira,dev
Mira: She sat down and did not grab it.
Dev: She looks glad to wait her turn.

# page
stacks mira,dev
Dev: I will read the bridge part again.
Mira: Slow, so our new friend can hear.

# page
library page,mira
Page: You did not sell it or hide it.
Mira: We did not burn it, we shared it.

# page
library mira,dev
Mira: I feel calm about the hold now.
Dev: Trusted feels much better than mad.

# page
night mira,dev
Dev: The dusty book has a new life.
Mira: All it needed was a patient pair.

# page
night mira,dev
Mira: Next time we see dust, we will look.
Dev: A hold slip may be in the back.

# page
library mira,dev
Mira: We can invite a friend each week.
Dev: The card asked us to do just that.

# page
library page,dev
Page: I am glad you waited your turn.
Dev: The book was patient, so we were too.

# page
stacks mira,dev
Mira: Put it back when our week ends.
Dev: The next kid on the hold can go.

# page
stacks mira,dev
Dev: I will not take a book too soon.
Mira: We wait, and that keeps trust.

# page
library mira,dev
Mira: This tale can live a long time.
Dev: If we stay patient and kind.

# page
night mira,dev
Mira: I am glad we got our turn.
Dev: And glad we could invite Page.
`}),f({id:"mlc-club",title:"The Club Stays Open",seriesId:"midnight-library",episode:9,genre:"fiction",subgenre:"adventure",themes:W,ladderLevel:9,expectedMinutes:10,stretchEligible:!1,glossary:[u("secret","Something kept from other people."),u("borrow","To use something and then give it back."),u("member","A person who belongs to a group.")],talkAbout:"Mira and Dev chose to share the club instead of keeping it a secret. When is sharing fairer than keeping something just for you?",comprehension:[b("What did they decide about the glowing book?",[["share","Put it back so others can borrow it","📚"],["hide","Hide it at home","🏠"],["sell","Sell it","💰"]],"share","recall"),b("Why was a closed club unfair?",[["few","Only two people could use the stories","🚪"],["dark","The room was too dark","🌑"],["long","The books were too long","📏"]],"few","inference")],script:`
# page
night mira,dev
Mira: The glow sits on the club table tonight.
Dev: We could take the book home and hide it.

# page
night mira,dev
Mira: A secret club sounds special at first.
Dev: It also sounds small if no one else can come.

# page
library mira,dev
Mira: If we hide it, no kid can borrow it.
Dev: And we should not sell a book like this.

# page
library page,mira
Page: Books in this room are here to borrow.
Mira: Not to hide, and not to sell.

# page
library page,dev
Page: If you lock the door, new kids cannot join.
Dev: A closed club would keep the stories for two.

# page
stacks mira,dev
Mira: Only two people could use the stories then.
Dev: That is why a closed club is unfair.

# page
stacks mira,dev
Dev: The room is not too dark for a club.
Mira: And the books are not too long to share.

# page
library mira,dev
Mira: Those tales helped us because we could reach them.
Dev: If we keep the glow, we close that path.

# page
library mira,dev
Mira: I will set the glowing book back in its gap.
Dev: It can shine a little and stay for others.

# page
night mira,dev
Dev: Others can borrow it on club days.
Mira: Then they bring it back for the next kid.

# page
library page,dev
Page: You can make a card that says how to join.
Dev: Any new member must read with care.

# page
library page,mira
Page: A member also puts each book back.
Mira: I can write those rules on the card.

# page
stacks mira,dev
Dev: Come after school, and bring a friend.
Mira: Listen first, and do not race the pages.

# page
stacks mira,dev
Mira: I will miss the ribbon in my pocket.
Dev: You can borrow it on club days.

# page
night mira,dev
Mira: Then I return it so the shelf stays full.
Dev: A secret in my pocket would not be fair.

# page
garden mira,dev
Mira: We can tape one card by the tiny door.
Dev: And one card by the bell for new kids.

# page
garden mira,dev
Dev: The club stays open even when we go home.
Mira: A shared room can feel safe for more kids.

# page
library page,mira
Page: A secret can feel safe for a short time.
Mira: A shared room feels safe for a longer time.

# page
library page,dev
Page: This club is safer because more kids can help.
Dev: I like that better than a closed door.

# page
night mira,dev
Mira: The bell gave one soft ring, as if it agreed.
Dev: Next kid, the shelf is yours to borrow.

# page
library mira,dev
Mira: Look, a new kid is at the club card.
Dev: He is reading the rules with a frown.

# page
library mira,dev
Dev: He says he wants to race the first book.
Mira: We should show him how the club works.

# page
stacks mira,dev
Mira: First we pick a book we can both reach.
Dev: Then we sit, and we do not rush.

# page
stacks mira,dev
Dev: He grabbed the book and flipped to the end.
Mira: That race will make him miss the good parts.

# page
night mira,dev
Mira: Let us teach him the club pace.
Dev: One page, then we talk, then the next.

# page
night mira,dev
Dev: He still wants to skip to the last page.
Mira: If he skips, the tale will not make sense.

# page
library page,mira
Page: A member listens before he races ahead.
Mira: We can show him that on this page.

# page
library mira,dev
Mira: See this small star in the corner.
Dev: A fast race would skip right past it.

# page
stacks mira,dev
Dev: He went back and found the star.
Mira: Now he sees why we do not race.

# page
stacks mira,dev
Mira: Do you still want to race the club?
Dev: He shook his head and smiled at us.

# page
library mira,dev
Dev: He wants to join and be a member.
Mira: That is his choice, and it is a good one.

# page
library page,dev
Page: A new member must put books back.
Dev: He nodded, and he set the book down.

# page
night mira,dev
Mira: We did not hide the glowing book at home.
Dev: We put it back so others can borrow it.

# page
night mira,dev
Mira: He can borrow it on the next club day.
Dev: Then he returns it for the kid after him.

# page
garden mira,dev
Mira: We showed him the tiny door and the bell.
Dev: He does not have to keep them a secret.

# page
garden mira,dev
Dev: The club is a place, not a locked box.
Mira: Any new member can come after school.

# page
library mira,dev
Mira: I feel glad we did not stay a pair only.
Dev: Two people were not enough for these tales.

# page
library page,mira
Page: You kept the club open, and that was fair.
Mira: A secret would have left kids out.

# page
stacks mira,dev
Dev: He is reading the first page the slow way.
Mira: He smiled when he found the next clue.

# page
stacks mira,dev
Mira: We can add his name to the member card.
Dev: He chose to join, so the card should say so.

# page
library mira,dev
Mira: He flipped ahead again when we looked away.
Dev: The race habit is still in his hands.

# page
library mira,dev
Dev: The glow on the book got thin just now.
Mira: Fast pages make the good light fade.

# page
night mira,dev
Mira: Come back to the page with the star.
Dev: We will read it with him, line by line.

# page
night mira,dev
Dev: He put his finger on each small part.
Mira: The glow is coming back as we go slow.

# page
stacks page,mira
Page: This is how a member learns the pace.
Mira: Not by a race, and not by a secret.

# page
stacks mira,dev
Dev: He read the line and did not skip.
Mira: He looks proud, and he looks calm too.

# page
library mira,dev
Mira: The books were not too long for him.
Dev: The room was not too dark to share.

# page
library mira,dev
Dev: Only two people would have been unfair.
Mira: Now a new member can use the stories.

# page
night mira,dev
Mira: He will borrow one book and bring it back.
Dev: That rule keeps the club open for all.

# page
night page,dev
Page: I can point new kids to your card.
Dev: Tell them to listen first and join if they like.

# page
garden mira,dev
Mira: The tiny door stays shut until club time.
Dev: We do not stay past the bell, and he knows.

# page
garden mira,dev
Dev: He waved when we said he was a member.
Mira: I think he will come back after school.

# page
library mira,dev
Mira: The glowing book is in its gap on the shelf.
Dev: Others can borrow it, and that was our choice.

# page
library mira,dev
Dev: I do not feel sad about letting it stay.
Mira: I feel glad that more kids can hold it.

# page
stacks mira,dev
Mira: A closed club would have fit in a pocket.
Dev: An open club fits a whole room of kids.

# page
stacks page,mira
Page: You made a place that can grow.
Mira: Each new member makes the club stronger.

# page
night mira,dev
Mira: We showed him the pace, and he chose it.
Dev: He did not have to race to belong.

# page
night mira,dev
Dev: Next time we can save him a chair.
Mira: The chair will mean he is one of us.

# page
library page,dev
Page: The bell is quiet, and the shelf is full.
Dev: The club stays open when we go home.

# page
library mira,dev
Mira: I am glad we did not keep a secret.
Dev: A member can borrow, read, and return.
`}),f({id:"mlc-pace",title:"Two Ways to Read",seriesId:"midnight-library",episode:10,genre:"fiction",subgenre:"adventure",themes:W,ladderLevel:9,expectedMinutes:10,stretchEligible:!0,glossary:[u("pace","How fast or slow you go."),u("detail","A small part that matters."),u("chapter","One section of a longer story.")],talkAbout:"Mira liked a fast pace and Dev liked a slow one. How do you and someone you know read differently?",comprehension:[b("What did Mira miss by reading fast?",[["clue","A small clue in the picture","🔎"],["door","The front door","🚪"],["bus","The bus","🚌"]],"clue","recall"),b("What did they learn about pace?",[["both","Each pace can find something","🐢"],["one","Only the fast way works","⚡"],["none","Pace does not matter","🚫"]],"both","inference")],script:`
# page
library mira,dev
Mira: I am done with this chapter now.
Dev: I am still on page two of it.

# page
library mira,dev
Dev: I am looking at the picture in the corner.
Mira: I did not look at the picture at all.

# page
stacks mira,dev
Mira: I was ready for the next book fast.
Dev: There is a tiny key drawn in the window.

# page
stacks mira,dev
Mira: I did not see a key in that picture.
Dev: It is a small clue in the corner.

# page
library mira,dev
Mira: I missed it because I read too fast.
Dev: It is not the front door or the bus.

# page
library page,mira
Page: A fast pace can catch the shape of a tale.
Mira: I know the boat left, but not the clue.

# page
library page,dev
Page: A slow pace can catch a detail.
Dev: I saw the key, but not why they sailed.

# page
night mira,dev
Mira: My fast pace missed a small clue.
Dev: My slow pace missed the reason they left.

# page
night mira,dev
Dev: A reading race is hurting the fun.
Mira: I tap my foot and you look sad.

# page
night mira,dev
Mira: I want to win, and that feels bad now.
Dev: The chapter is not a race track.

# page
stacks mira,dev
Mira: Let us try a slower way for this part.
Dev: You look at each picture, and I read the words.

# page
stacks mira,dev
Dev: I will read the words straight through once.
Mira: I will put my finger on each picture.

# page
library mira,dev
Mira: Tell me the shape, and I will tell the clue.
Dev: The boat left at dawn to beat a storm.

# page
library mira,dev
Dev: Now you tell me the detail you found.
Mira: The key in the window opens a dock box.

# page
night mira,dev
Mira: I would have missed that clue at my old pace.
Dev: And I would have missed why they sailed.

# page
night mira,dev
Dev: Each pace can find something the other missed.
Mira: Only the fast way does not have to win.

# page
library page,mira
Page: Pace does matter, and both ways can help.
Mira: I will not say pace does not matter.

# page
library mira,dev
Dev: I still feel a rush in my hands.
Mira: Then we set a pace and we stick to it.

# page
stacks mira,dev
Mira: We stop at the end of this chapter.
Dev: Even if the next part looks like fun.

# page
stacks mira,dev
Dev: I want to race one more page.
Mira: If you rush, we may lose the fun again.

# page
night mira,dev
Mira: You skipped the picture on this page.
Dev: I saw words, and I did not look.

# page
night mira,dev
Dev: The small clue was a star by the key.
Mira: You rushed, so you missed that detail.

# page
library mira,dev
Mira: This is the setback we hoped to skip.
Dev: I said I would go slow, and I did not.

# page
library mira,dev
Dev: I am sorry I rushed the good part.
Mira: We can go back and use your real pace.

# page
stacks mira,dev
Mira: Your pace is slow, and that is a skill.
Dev: Your pace is quick, and that is a skill too.

# page
stacks mira,dev
Dev: I will ask what happens next, not skip.
Mira: I will pause when a detail shows up.

# page
library mira,dev
Mira: Let us set our own pace for the rest.
Dev: No race, and no one has to feel slow.

# page
library mira,dev
Dev: I read two lines, then I check the picture.
Mira: I read the page, then I hunt for a detail.

# page
night mira,dev
Mira: The key clue is in my notes now.
Dev: The dawn line is in my notes too.

# page
night mira,dev
Dev: The map shows the path and a small star.
Mira: We skipped that star when we raced.

# page
garden mira,dev
Mira: Sit by the window and do not argue.
Dev: The fun is back when we are not racing.

# page
garden page,mira
Page: Stop while the story is still good.
Mira: We do not have to drain the fun.

# page
library mira,dev
Dev: If we race to the end, the joy thins.
Mira: So we close the book on a good page.

# page
library mira,dev
Mira: The chapter can wait until the next club day.
Dev: My pace will be slow, and I will still ask.

# page
stacks mira,dev
Dev: Your pace can stay quick if you pause.
Mira: I can pause for a detail and still be me.

# page
stacks mira,dev
Mira: I found the clue I missed the first time.
Dev: I found the reason the boat left at dawn.

# page
night mira,dev
Mira: The key opens the dock box in the tale.
Dev: Inside is a note about the storm.

# page
night mira,dev
Dev: Each pace found a piece the other needed.
Mira: Pace does matter, and both ways work.

# page
library page,dev
Page: A fast reader and a slow reader can share.
Dev: The club can welcome both kinds of pace.

# page
library mira,dev
Mira: The story is big enough for both of us.
Dev: We will not turn reading into a race.

# page
stacks mira,dev
Mira: When you rushed, I felt the fun drop.
Dev: I saw your face and I felt bad too.

# page
stacks mira,dev
Dev: I rushed because I did not want to be last.
Mira: Last is not bad if the detail is good.

# page
night mira,dev
Mira: We can mark the page and stop here.
Dev: The next chapter will be here for us.

# page
night mira,dev
Dev: I want one more page, but I can wait.
Mira: Stopping on this page keeps the tale sweet.

# page
library mira,dev
Mira: My old pace would have blown past the clue.
Dev: My old pace would have missed the dawn line.

# page
library mira,dev
Dev: We each keep a pace that fits.
Mira: And we borrow the other pace when stuck.

# page
garden mira,dev
Mira: The picture clue was small, but it matters.
Dev: The plot clue was big, and it matters too.

# page
garden mira,dev
Dev: I will not rush just to match you.
Mira: I will not tap my foot at your pace.

# page
library page,mira
Page: You set your own pace and kept the fun.
Mira: We stopped while the story was still good.

# page
library page,dev
Page: What did the fast read miss in the picture?
Dev: A small clue, the key in the window.

# page
stacks mira,dev
Mira: I will tell the club about our two ways.
Dev: A fast way and a slow way can both help.

# page
stacks mira,dev
Dev: If a kid wants a race, we can say no.
Mira: We can show them how a calm pace feels.

# page
night mira,dev
Mira: The chapter we saved will taste better later.
Dev: I like a tale that is still waiting.

# page
night mira,dev
Dev: My pace is still slow, and I am glad.
Mira: My pace is still quick, and I can pause.

# page
library mira,dev
Mira: We do not need the same pace to be friends.
Dev: Friends can read side by side in two ways.

# page
library mira,dev
Dev: The bus was never the clue in this tale.
Mira: And the front door was not the missed part.

# page
stacks mira,dev
Mira: Only the fast way is not the one true way.
Dev: Each pace can find something worth keeping.

# page
stacks mira,dev
Dev: I will bring my slow eyes next time.
Mira: I will bring my quick eyes and a pause.

# page
night page,dev
Page: Leave the book on a good page for next time.
Dev: Our pace will be there when we come back.

# page
library mira,dev
Mira: I am glad the race did not win.
Dev: Our own pace kept the story fun.
`})],M=[f({id:"timehop-train",title:"The First Passenger Train",seriesId:"time-hop",episode:1,genre:"nonfiction",subgenre:"history",themes:["history","trains"],ladderLevel:7,expectedMinutes:12,stretchEligible:!0,glossary:[u("passenger","A person who rides, but does not drive."),u("carriages","The cars that people sat in."),u("engine","The machine that pulled the train."),u("families","People who belong together, like parents and children.")],talkAbout:"The train was exciting and a little scary. What new thing felt like both to you?",comprehension:[b("What did Asha and Rafi visit?",[["train","An early train","🚂"],["rocket","A rocket","🚀"],["boat","A boat","⛵"]],"train","recall"),b("How did people feel about it?",[["both","Amazed and scared","😮"],["only","Only sleepy","😴"],["none","Nobody noticed","🙈"]],"both","inference")],script:`
# page
time asha,rafi
Asha: We hop back to the year 1830.
Rafi: That year was long ago in England.

# page
time asha,rafi
Asha: We came to see an early train.
Rafi: It is the first big passenger line.

# page
time asha,rafi
caption: A bright flash took them to the tracks.
Rafi: I hear a loud steam sound.

# page
train asha,rafi
Asha: Look at the engine on the track.
Rafi: Steam puffs out of the top.

# page
train asha,rafi
caption: The engine pulled the open carriages.
Asha: Some carriages have no roof at all.

# page
train asha,rafi
Rafi: People sit on long wood benches.
Asha: The wind can reach every seat.

# page
train asha,rafi
Asha: A passenger rides but does not drive.
Rafi: The worker by the engine does that job.

# page
train asha,rafi
caption: A crowd stood by the new station.
Rafi: Some people stare in full wonder.

# page
train asha,rafi
Asha: Some people felt scared of the speed.
Rafi: They step back when the engine huffs.

# page
train asha,rafi
Asha: Both feelings can be true at once.
Rafi: New things can feel big and new.

# page
village asha,rafi
caption: A village sat near the new track.
Asha: Families could go much farther now.

# page
village asha,rafi
Rafi: A horse cart is slow on the road.
Asha: This line ran from town to town.

# page
train asha,rafi
Rafi: Families may visit a far town.
Asha: A trip can take them much farther.

# page
train guard,asha,rafi
Guard: Stand well back from the track.
Asha: Is that a new rule here?

# page
train guard,asha,rafi
Guard: Yes, the rule keeps people safe.
Rafi: Speed is new, so we need rules.

# page
train guard,rafi
Guard: Do not step on the rails.
Rafi: I will write that rule down.

# page
train asha,rafi
Asha: Let us ask one rider next.
Rafi: And one worker by the engine.

# page
train asha,rafi
Asha: What was the ride like for you?
caption: The rider said the speed felt new.

# page
train asha,rafi
Rafi: Did you feel wonder or fear?
caption: The rider said she felt both.

# page
train asha,rafi
Asha: She stared with wide open eyes.
Rafi: That look is wonder, not just fear.

# page
train asha,rafi
Asha: Now we ask the worker too.
caption: He stood close to the hot engine.

# page
train asha,rafi
Rafi: What is the hard part of your work?
caption: The worker said the coal fire is hot.

# page
train asha,rafi
Asha: He feeds the fire so the train moves.
Rafi: That job keeps the engine going.

# page
train asha,rafi
caption: Smoke rose in a thick gray cloud.
Asha: I can see why some felt scared.

# page
village asha,rafi
Rafi: A horse on the road stepped back.
Asha: New noise can scare a horse.

# page
train asha,rafi
caption: Flags waved as the train rolled in.
Rafi: The crowd let out a loud cheer.

# page
train guard,asha,rafi
Guard: Hats off, but feet stay back.
Asha: You help the crowd and the train.

# page
train asha,rafi
Rafi: Let us try a count at home.
Asha: A line of chairs can be a train.

# page
time asha,rafi
caption: They set chairs in a long line.
Rafi: Count how many people can sit.

# page
time asha,rafi
Asha: One cart holds just a few people.
Rafi: This line holds many more than that.

# page
time asha,rafi
Asha: A train carries more than one cart.
Rafi: That is why tracks changed trips.

# page
time asha,rafi
caption: More seats mean more people can go.
Asha: Families could ride all in one trip.

# page
timeline asha,rafi
Rafi: We put 1830 on our line.
Asha: England goes on the line too.

# page
timeline asha,rafi
caption: First came the horse cart on the road.
Rafi: Next came this new passenger train.

# page
timeline asha,rafi
Asha: The engine made the trip much faster.
Rafi: Open carriages let people see out.

# page
train asha,rafi
caption: Some carriages were open to the sky.
Asha: Rain and wind could reach the seats.

# page
train asha,rafi
Asha: A seat with a roof cost more.
Rafi: Not every rider got a roof.

# page
village asha,rafi
caption: Shops in the village saw more guests.
Rafi: A train can bring people to town.

# page
village asha,rafi
Asha: Some shop owners felt glad indeed.
Rafi: Some on the old road felt scared.

# page
train guard,asha,rafi
Guard: Change can feel good and hard.
Asha: That matches what we heard today.

# page
time asha,rafi
Rafi: I will write notes in my book.
Asha: Put the engine and the carriages in.

# page
time asha,rafi
Asha: Add the rule the guard gave us.
Rafi: Add how families could go farther.

# page
time asha,rafi
caption: Asha read her notes out loud.
Rafi: We did not skip the scared people.

# page
timeline asha,rafi
Asha: Our line shows cart, then train.
Rafi: The year 1830 sits in England.

# page
time asha,rafi
Asha: I liked the wonder and the fear.
Rafi: Both belong in this true story.

# page
time asha,rafi
caption: They shut the book and held it tight.
Asha: Time to hop back home now.

# page
time asha,rafi
Rafi: I can still hear the steam.
Asha: And I can see the open carriages.

# page
time asha,rafi
Rafi: We will tell a friend what we saw.
Asha: The early train changed how far people went.
`}),f({id:"timehop-letter",title:"Two Views of the Same Train",seriesId:"time-hop",episode:2,genre:"nonfiction",subgenre:"history",themes:["history","fairness"],ladderLevel:9,expectedMinutes:12,stretchEligible:!0,glossary:[u("porter","A worker who helped people with bags."),u("history","The story of what people did long ago."),u("different","Not the same."),u("everyone","All of the people."),u("timeline","A simple line that shows what happened first and next.")],talkAbout:"The guard and the porter felt differently. How can two people both be telling the truth?",comprehension:[b("Who missed the quiet road?",[["guard","The station guard","💂"],["mouse","The mouse","🐭"],["wombat","Wombat","🐾"]],"guard","recall"),b("Why was the porter glad?",[["sister","He could visit his sister","💌"],["race","He won a race","🏁"],["gold","He found gold","💰"]],"sister","inference"),b("What idea are Asha and Rafi holding?",[["both","Both views can matter","🤝"],["one","Only the loudest view","📣"],["none","Stories do not matter","🚫"]],"both","inference")],script:`
# page
time asha,rafi
Asha: We hop back to the station again.
Rafi: Last time we saw the early train.

# page
time asha,rafi
caption: A folded letter sat on a wet bench.
Asha: Rain must have found it in the night.

# page
train asha,rafi
Rafi: A smudge sits on the top line.
Asha: The words under the smudge still look clear.

# page
train asha,rafi
caption: The letter came from the station guard.
Rafi: Let us read his words with care.

# page
train asha,rafi
narration: The guard wrote that the new train is loud.
Asha: He says he misses the quiet road.

# page
train asha,rafi
narration: He liked to walk that road at dusk.
Rafi: Now wheels and steam fill the air.

# page
train asha,rafi
Asha: He sounds upset in this short letter.
Rafi: The change feels unfair to him now.

# page
train asha,rafi
Asha: Smoke and noise took the quiet away.
Rafi: His old road has fewer carts now.

# page
train asha,rafi
caption: Coach horses used to fill that road.
Asha: He liked the clip of hooves at dusk.

# page
village asha,rafi
Rafi: Some inns on the road lost trips.
Asha: Fewer carts can mean less pay for them.

# page
train asha,rafi
Asha: The guard is not a bad person.
Rafi: He tells the truth about his days.

# page
train guard,asha,rafi
caption: They found the guard by the track.
Guard: I wrote that letter late last night.

# page
train guard,asha
Guard: I miss how quiet the road was.
Asha: The train changed your days a lot.

# page
train guard,rafi
Guard: I do not hate the train itself.
Rafi: You miss what the road used to be.

# page
train guard,asha,rafi
Guard: At dawn the wheels wake me up.
Asha: That is a real cost for you.

# page
train guard,rafi
Guard: This job is new, and I need it.
Rafi: You can need the job and still feel sad.

# page
train asha,rafi
Rafi: His view is true for him now.
Asha: We should not toss his letter out.

# page
train asha,rafi
caption: A second note fell from the letter.
Rafi: This one is from a young porter.

# page
train asha,rafi
narration: The porter wrote about his far sister.
Asha: He says the train lets him visit her.

# page
train asha,rafi
narration: She lives in a town far away.
Rafi: A visit used to take a full day.

# page
market asha,rafi,porter
caption: They met the porter by the market.
Porter: I help people with bags each day.

# page
market porter,rafi
Porter: The train lets me visit my sister.
Rafi: How far is her town from here?

# page
market porter,asha
Porter: It is in another town by rail.
Asha: Could you visit her before the train?

# page
market porter,asha,rafi
Porter: A horse cart took too long for me.
Rafi: So the new train made you glad.

# page
village porter,asha
caption: His sister lived in a small village.
Porter: Now I can see her and come home.

# page
village porter,asha
Porter: I can go and be back by night.
Asha: That is a big change for him.

# page
market porter,rafi
Rafi: Your job with bags is new too.
Porter: I am glad for the work and the visits.

# page
market porter,asha
Asha: You are glad because you can visit.
Porter: Yes, I can visit my sister now.

# page
train asha,rafi,guard,porter
caption: The guard and the porter stood near the bags.
Rafi: You two saw the same new train.

# page
train asha,rafi,guard,porter
caption: Two people saw one change in two different ways.
Asha: The station guard misses the quiet road.

# page
train asha,rafi
Rafi: The porter is glad he can visit.
Asha: He can visit his sister by train.

# page
train asha,rafi
Asha: Fair does not mean each one feels glad at first.
Rafi: Not everyone felt glad on day one.

# page
train guard,porter,asha
Guard: I still like some parts of the train.
Porter: I still wish the dawn was more quiet.

# page
train asha,rafi
Asha: We can hold both stories at once.
Rafi: Each one is true for that person.

# page
train asha,rafi
Asha: Both views can matter when we listen.
Rafi: We do not have to pick one view.

# page
timeline asha,rafi
Asha: History is bigger when we listen to both.
Rafi: If we hear one view, we miss a lot.

# page
timeline asha,rafi
caption: They drew a timeline on a long page.
Rafi: The timeline shows the guard, then the porter.

# page
timeline asha,rafi
Asha: First we put the guard and his letter.
Rafi: Next we put the porter and his note.

# page
timeline asha,rafi
Asha: A sad mark goes by the quiet road.
Rafi: A glad mark goes by the sister visit.

# page
train guard,porter
Guard: You do not have to feel what I feel.
Porter: And you do not have to feel what I feel.

# page
train asha,rafi
Asha: Fair means we keep both of your views.
Rafi: Each story stays true for that one.

# page
train asha,rafi
caption: A soft rain fell on the station roof.
Asha: We tuck the letter under a coat.

# page
train guard,asha,rafi
Rafi: The smudge did not hide the main words.
Guard: You can still read what I miss.

# page
train porter,asha
Porter: And you can still read why I am glad.
Asha: Your sister is the reason you are glad.

# page
time asha,rafi
Rafi: I will write both views in my book.
Asha: Our history notes should name both of you.

# page
time asha,rafi
caption: Rafi wrote the guard, the road, and the noise.
Asha: I wrote the porter, the train, and his sister.

# page
time asha,rafi
Rafi: When we listen, the past gets bigger.
Asha: One loud view is not the whole tale.

# page
timeline asha,rafi
caption: Not everyone felt the same on day one.
Asha: Some felt glad and some felt let down.

# page
village asha,rafi
caption: They walked the quiet road by the village.
Rafi: I can hear why the guard misses it.

# page
market asha,rafi
caption: The market was loud with bags and talk.
Asha: I can see why the porter likes this.

# page
market asha,rafi
Rafi: The road and the market are both real.
Asha: A fair note has room for each one.

# page
timeline asha,rafi
Rafi: Let us add the road and the market.
Asha: The timeline can hold more than one view.

# page
time asha,rafi
caption: Asha held the letter tight in her hand.
Rafi: The smudge is dry now, and the ink holds.

# page
time asha,rafi
Asha: We hop home with the letter held tight.
Rafi: We will not drop the porter note.

# page
time asha,rafi
Asha: Two views of one train can both matter.
Rafi: That is the idea we hold now.

# page
time asha,rafi
Rafi: I will tell the guard view first.
Asha: Then I will tell the porter view.

# page
time asha,rafi
caption: The station grew small as they hopped.
Asha: I can still hear the wheels and the road.

# page
time asha,rafi
Rafi: Home is quiet, and that feels good.
Asha: Quiet is not the only good thing.

# page
time asha,rafi
caption: They set the letter by the open book.
Rafi: Both stories can live on this page.

# page
time asha,rafi
Asha: Two true views make the past more clear.
Rafi: We will keep the letter and tell it fair.
`})],A=["science","why"],P=[...I,f({id:"wombat-sky",title:"Why Is the Sky Blue?",seriesId:"wonder-wombat",episode:1,genre:"nonfiction",subgenre:"science",themes:["science","sky"],ladderLevel:5,expectedMinutes:6,stretchEligible:!1,glossary:[u("sunlight","Light that comes from the sun."),u("scatters","Spreads out in many directions.")],talkAbout:"Look outside together. What color is the sky right now, and what else can you notice?",comprehension:[b("Which light scatters to make the sky look blue?",[["blue","Blue light","🔵"],["mud","Mud","🟤"],["ink","Ink","🖤"]],"blue","recall"),b("When can red light reach you more?",[["sunset","At sunset","🌅"],["lunch","At lunch","🥪"],["class","In class","✏️"]],"sunset","recall")],script:`
# page
meadow wombat,dot
Dot: Why is the sky blue?
Wombat: Let us look up and see.

# page
sky wombat,dot
Wombat: I guess the air is painted.
Dot: Blue paint would make a blue sky.

# page
meadow wombat,dot
Dot: Is that guess really the truth?
Wombat: Let us test it with clouds.

# page
sky wombat,dot
Wombat: Clouds sit in the air too.
Dot: But clouds can look white or gray.

# page
meadow wombat,dot
Dot: If air were paint, clouds would match.
Wombat: They do not match the sky.

# page
sky wombat,dot
Wombat: So the air is not blue paint.
Dot: My first guess was wrong today.

# page
meadow wombat,dot
Dot: Maybe the sea paints the sky.
Wombat: Blue water could bounce light up.

# page
sky wombat,dot
Dot: High hills sit far from the sea.
Wombat: The sky there is still blue.

# page
meadow wombat,dot
Wombat: So the sea is not the cause.
Dot: We need a better idea now.

# page
sky wombat,dot
Wombat: Sunlight looks white on a clear day.
Dot: White is not just one color.

# page
meadow wombat,dot
Dot: A rainbow splits that white light.
Wombat: Red and blue both hide in it.

# page
sky wombat,dot
Wombat: Sunlight holds many colors at once.
Dot: Each color acts in its own way.

# page
meadow wombat,dot
Wombat: Tiny bits of air hit the light.
Dot: Blue light bounces off more often.

# page
sky wombat,dot
Wombat: We say blue light scatters more.
Dot: Scatters means it bounces many ways.

# page
meadow wombat,dot
Dot: Red light scatters much less than blue.
Wombat: Red keeps going more straight ahead.

# page
sky wombat,dot
Wombat: Blue light comes from all sides.
Dot: Your eyes see that as blue sky.

# page
meadow wombat,dot
Dot: Red light does not fill the sky.
Wombat: It travels more straight to your eyes.

# page
sky wombat,dot
Wombat: That is why day sky looks blue.
Dot: Sunlight held that blue all along.

# page
meadow wombat,dot
Dot: At noon the air path is short.
Wombat: Blue light still fills the sky then.

# page
sky wombat,dot
Wombat: Near sunset the air path grows long.
Dot: The light must cross much more air.

# page
meadow wombat,dot
Dot: Blue light scatters off that long path.
Wombat: Less blue light can reach your eyes.

# page
sky wombat,dot
Wombat: Red light reaches you more then.
Dot: So the sky glows red and gold.

# page
meadow wombat,dot
Dot: Did the sun turn into red?
Wombat: No, the long path let red through.

# page
sky wombat,dot
Wombat: The same sunlight left home as white.
Dot: The air sorted colors on the way.

# page
forest wombat,dot
Dot: Look at those far hills now.
Wombat: They look pale blue in the day.

# page
meadow wombat,dot
Wombat: Air between us scatters blue light.
Dot: The hills did not turn blue today.

# page
forest wombat,dot
Dot: Close grass stays green at our feet.
Wombat: Less air sits between us and it.

# page
meadow wombat,dot
Wombat: A short air path adds little blue.
Dot: A long air path adds much more.

# page
sky wombat,dot
Dot: The sky above you can stay blue.
Wombat: The path above you is still short.

# page
meadow wombat,dot
Dot: Low down the air path is long.
Wombat: That is where red light wins out.

# page
sky wombat,dot
Wombat: You can check this with your eyes.
Dot: Look up at the sky near noon.

# page
meadow wombat,dot
Dot: Name the blue you see up high.
Wombat: Then look again when sunset is near.

# page
sky wombat,dot
Wombat: The noon sky should look more blue.
Dot: The sunset sky should show more red.

# page
burrow wombat,dot
Dot: You can try a glass test too.
Wombat: Fill a clear glass with water.

# page
burrow wombat,dot
Dot: Add one small drop of milk.
Wombat: Milk bits will scatter light for you.

# page
burrow wombat,dot
Wombat: Take the glass into a dark room.
Dot: Shine a lamp through the milky glass.

# page
burrow wombat,dot
Dot: From the side the glow looks blue.
Wombat: Blue light scatters out toward you.

# page
burrow wombat,dot
Wombat: Look through the glass at the lamp.
Dot: That light looks more gold than blue.

# page
burrow wombat,dot
Dot: The lamp did not change its color.
Wombat: The long path let red through more.

# page
meadow wombat,dot
Wombat: Sky and glass follow the same rule.
Dot: Blue light scatters, and red goes on.
`}),f({id:"wombat-leaves",title:"Why Do Leaves Fall?",seriesId:"wonder-wombat",episode:2,genre:"nonfiction",subgenre:"science",themes:A,ladderLevel:5,expectedMinutes:6,stretchEligible:!0,glossary:[u("autumn","The season when many days grow cooler."),u("seal","To close something so it stays shut.")],talkAbout:"Find a leaf and look for green, yellow, or brown. What do you think the tree is doing?",comprehension:[b("What fades in autumn?",[["green","The green in the leaf","🍃"],["roots","The roots","🌱"],["rain","All the rain","🌧️"]],"green","recall"),b("Why does the leaf fall?",[["seal","The tree seals the stem","🍂"],["pull","A person pulls each one","✋"],["night","Night deletes them","🌙"]],"seal","inference")],script:`
# page
forest wombat,dot
Dot: Why do the leaves fall down?
Wombat: Let us watch this tall tree.

# page
forest wombat,dot
Wombat: I guess the wind rips them off.
Dot: A hard gust could tug a stem.

# page
meadow wombat,dot
Dot: Leaves also fall on a calm day.
Wombat: Wind is not the whole cause.

# page
forest wombat,dot
Wombat: Maybe the tree is sick or dying.
Dot: Sick trees can drop leaves early.

# page
forest wombat,dot
Dot: Look at the buds on each twig.
Wombat: They are plump and still alive.

# page
meadow wombat,dot
Wombat: This tree set plump new buds.
Dot: So it is not dying at all.

# page
forest wombat,dot
Dot: What starts the drop each year?
Wombat: Autumn days grow short and cool.

# page
forest wombat,dot
Wombat: The tree can sense that shift.
Dot: Short days tell it to get ready.

# page
meadow wombat,dot
Dot: All summer the leaf made food.
Wombat: Green color helped with that job.

# page
forest wombat,dot
Wombat: The green catches sunlight for the leaf.
Dot: The tree uses that food to grow.

# page
forest wombat,dot
Dot: In autumn the green starts to fade.
Wombat: Fade means the green breaks down.

# page
meadow wombat,dot
Wombat: The leaf will not keep making food.
Dot: Cold short days make that job hard.

# page
forest wombat,dot
Dot: Where do yellow and orange come from?
Wombat: They were in the leaf all along.

# page
forest wombat,dot
Wombat: Green was hiding the warm colors.
Dot: Yellow sat under the green coat.

# page
meadow wombat,dot
Dot: Orange sat under that coat too.
Wombat: When green fades, those colors show.

# page
forest wombat,dot
Wombat: A leaf can turn gold in days.
Dot: The gold was there the whole time.

# page
meadow wombat,dot
Dot: So autumn did not paint the leaf.
Wombat: It took the green cover away.

# page
forest wombat,dot
Wombat: Next the tree must seal the stem.
Dot: What does that seal do for it?

# page
forest wombat,dot
Dot: Tiny tubes run through the stem.
Wombat: They carry water in and food out.

# page
meadow wombat,dot
Wombat: The seal closes those tiny tubes.
Dot: Seal means it shuts them tight.

# page
forest wombat,dot
Dot: Water stops going into the leaf.
Wombat: Food stops coming back to the tree.

# page
forest wombat,dot
Wombat: The leaf dries out and turns crisp.
Dot: The seal cut the leaf off.

# page
meadow wombat,dot
Dot: A small tug can drop it now.
Wombat: Even calm air can let it fall.

# page
forest wombat,dot
Wombat: The tree planned this drop.
Dot: It is a plan, not a mistake.

# page
meadow wombat,dot
Dot: Does the whole tree die next?
Wombat: No, the tree rests and stays alive.

# page
forest wombat,dot
Wombat: It saves food in roots and trunk.
Dot: That food will feed new leaves later.

# page
forest wombat,dot
Dot: Buds on the twigs wait for spring.
Wombat: Spring days will open them again.

# page
meadow wombat,dot
Wombat: Not every tree drops its leaves.
Dot: Look at the pine across the path.

# page
forest wombat,dot
Dot: Its needles stay green all year.
Wombat: They use a plan that keeps green.

# page
forest wombat,dot
Wombat: Needle leaves are tough and thin.
Dot: They can keep making food in winter.

# page
meadow wombat,dot
Dot: Our big tree chose a rest plan.
Wombat: The pine chose a stay green plan.

# page
forest wombat,dot
Dot: What happens to leaves on the ground?
Wombat: They are not waste to toss out.

# page
meadow wombat,dot
Wombat: Small bugs and rain break them down.
Dot: The bits turn into soil food.

# page
forest wombat,dot
Dot: The tree can use that food later.
Wombat: Falling leaves help the next year.

# page
garden wombat,dot
Wombat: You can try this with real leaves.
Dot: Or draw leaves on some paper.

# page
garden wombat,dot
Dot: Sort them into piles by color.
Wombat: Put green leaves in the first pile.

# page
garden wombat,dot
Wombat: Put yellow leaves in the next pile.
Dot: Put orange leaves in the last pile.

# page
meadow wombat,dot
Dot: Brown leaves can make one more pile.
Wombat: Brown often comes after the gold fades.

# page
forest wombat,dot
Wombat: Look at a stem end with care.
Dot: A dry seal mark may show there.

# page
forest wombat,dot
Dot: Green hid the gold until autumn.
Wombat: The seal let each leaf fall.
`}),f({id:"wombat-ice",title:"Why Does Ice Float?",seriesId:"wonder-wombat",episode:3,genre:"nonfiction",subgenre:"science",themes:A,ladderLevel:6,expectedMinutes:7,stretchEligible:!1,glossary:[u("freezes","Turns from liquid into ice."),u("liquid","A wet form you can pour, like water.")],talkAbout:"If you have ice in a glass, watch it float. What else floats or sinks at home?",comprehension:[b("Why does ice float?",[["room","Frozen water takes more room","🧊"],["glue","Ice is full of glue","🧴"],["air","Someone ties it up","🎈"]],"room","recall"),b("What can live under the ice?",[["fish","Fish in the liquid water","🐟"],["fire","A fire","🔥"],["sand","Only dry sand","🏜️"]],"fish","inference")],script:`
# page
pond wombat,dot
Dot: This ice stays on top of the pond.
Wombat: It floats, so let us find out why.

# page
pond wombat,dot
Dot: I guess air bubbles hold it up.
Wombat: Some ice does have tiny bubbles.

# page
pond wombat,dot
Dot: But this clear ice has no bubbles.
Wombat: It still floats on the pond.

# page
meadow wombat,dot
Dot: Maybe cold things always float.
Wombat: Let us test that with a rock.

# page
pond wombat,dot
Dot: This rock is cold from the pond.
Wombat: It sinks straight to the bottom.

# page
pond wombat,dot
Dot: So cold is not why ice floats.
Wombat: The rock is not made of water.

# page
pond wombat,dot
Dot: This ice is still just water.
Wombat: It is water that froze hard.

# page
burrow wombat,dot
Dot: Water can be a liquid you pour.
Wombat: When it freezes, it turns into ice.

# page
burrow wombat,dot
Dot: Does the freeze change its size?
Wombat: Yes, frozen water takes more room.

# page
burrow wombat,dot
Dot: The same water spreads out as ice.
Wombat: It needs more room than the liquid did.

# page
pond wombat,dot
Dot: More room makes it light for its size.
Wombat: Light for its size is why it floats.

# page
pond wombat,dot
Dot: A thing heavy for its size sinks.
Wombat: The rock is heavy for its size.

# page
burrow wombat,dot
Wombat: We can see the extra room at home.
Dot: Fill a cup and mark the water line.

# page
burrow wombat,dot
Dot: Now the cup can freeze all night.
Wombat: In the morning we will check the line.

# page
burrow wombat,dot
Dot: The ice sits above the old line.
Wombat: It grew up because it needed more room.

# page
burrow wombat,dot
Dot: Did new water sneak into the cup?
Wombat: No, it is the same water spread out.

# page
burrow wombat,dot
Dot: Let the ice melt back to liquid.
Wombat: The water fits the first line again.

# page
pond wombat,dot
Dot: So ice is still water, just bigger.
Wombat: Frozen water takes more room than liquid.

# page
pond wombat,dot
Dot: A winter pond freezes from the top.
Wombat: Cold air cools the top of the water.

# page
pond wombat,dot
Dot: The first ice stays up on the pond.
Wombat: It does not sink down to the mud.

# page
pond wombat,dot
Dot: Liquid water stays under that ice.
Wombat: Fish can live in the liquid water.

# page
pond wombat,dot
Dot: How does the ice help the fish?
Wombat: The ice lid slows the cold air.

# page
pond wombat,dot
Dot: The water below can stay liquid.
Wombat: It does not all turn into ice.

# page
pond wombat,dot
Dot: What if ice sank to the bottom?
Wombat: New ice would keep piling down there.

# page
pond wombat,dot
Dot: The pond could freeze from the mud up.
Wombat: Fish would lose the liquid they need.

# page
pond wombat,dot
Dot: Because ice floats, they keep a home.
Wombat: Only the top turns to ice.

# page
burrow wombat,dot
Dot: A full bottle shows the same rule.
Wombat: Fill it with water and leave a gap.

# page
burrow wombat,dot
Dot: Set the bottle in a cold freezer.
Wombat: The ice will need more room than before.

# page
burrow wombat,dot
Dot: No gap means the bottle may crack.
Wombat: The ice pushes out as it grows.

# page
burrow wombat,dot
Dot: Leave a gap so the ice can grow.
Wombat: That gap is the extra room it needs.

# page
pond wombat,dot
Dot: Rocks by the pond sink every time.
Wombat: Ice from that same pond floats.

# page
pond wombat,dot
Dot: One is rock, and one is frozen water.
Wombat: Only the frozen water takes more room.

# page
burrow wombat,dot
Dot: You can try this with one ice cube.
Wombat: Drop it into a glass of water.

# page
burrow wombat,dot
Dot: Watch the cube float at the top.
Wombat: Part of it sits above the water.

# page
burrow wombat,dot
Dot: That top part shows the extra room.
Wombat: The ice is light for its size.

# page
burrow wombat,dot
Dot: Push the cube down under the water.
Wombat: Let go, and it pops back up.

# page
burrow wombat,dot
Dot: Nothing holds it up but the water.
Wombat: It floats because it takes more room.

# page
burrow wombat,dot
Dot: Wait while the cube melts in the glass.
Wombat: It turns back into liquid water.

# page
burrow wombat,dot
Dot: The melt is the same water you froze.
Wombat: It did not become a new thing.

# page
burrow wombat,dot
Dot: You can also mark a cup at home.
Wombat: Freeze it and look at the line.

# page
burrow wombat,dot
Dot: The ice should stand above your mark.
Wombat: After it melts, it should meet the mark.

# page
meadow wombat,dot
Dot: A pond, a bottle, and a glass agree.
Wombat: Frozen water takes more room, so it floats.

# page
pond wombat,dot
Dot: That is why the ice stays on top.
Wombat: And why fish still have liquid below.

# page
pond wombat,dot
Dot: Cold did not make it float.
Wombat: The extra room did the real work.
`}),f({id:"wombat-stars",title:"Why Do Stars Twinkle?",seriesId:"wonder-wombat",episode:4,genre:"nonfiction",subgenre:"science",themes:["science","sky"],ladderLevel:6,expectedMinutes:7,stretchEligible:!0,glossary:[u("twinkle","To seem to flash or wink."),u("steady","Staying the same, not flickering.")],talkAbout:"On a clear night, compare a star with a brighter planet if you can see one. Which one winks more?",comprehension:[b("What makes a star seem to twinkle?",[["air","Moving air bends its light","🌬️"],["switch","The star turns off","💡"],["birds","Birds fly past","🐦"]],"air","recall"),b("Why do planets twinkle less?",[["bigger","They look bigger in the sky","🪐"],["close","They sit on the roof","🏠"],["paint","They are painted on","🎨"]],"bigger","inference")],script:`
# page
moon wombat,dot
Dot: That star keeps flashing in the night.
Wombat: We say it does twinkle up there.

# page
moon wombat,dot
Dot: I guess the star is winking at us.
Wombat: Maybe it turns off and on.

# page
sky wombat,dot
Dot: A real wink would mean the star blinks.
Wombat: Let us test that idea tonight.

# page
sky wombat,dot
Dot: The light never fully goes out.
Wombat: It only seems to flash and fade.

# page
moon wombat,dot
Dot: So the star is not shutting off.
Wombat: The star itself stays steady.

# page
meadow wombat,dot
Dot: Maybe my eyes are just tired.
Wombat: A friend beside you sees it too.

# page
meadow wombat,dot
Dot: We both see it, so our eyes work.
Wombat: The twinkle is not just in your eyes.

# page
sky wombat,dot
Dot: Then what makes the star seem to flash?
Wombat: Its light must cross our moving air.

# page
sky wombat,dot
Dot: Air is not one still blanket.
Wombat: Warm bits and cool bits mix.

# page
sky wombat,dot
Dot: Those bits bend the star light a little.
Wombat: Each bend shifts the beam a hair.

# page
moon wombat,dot
Dot: One moment the beam hits your eye.
Wombat: The next moment it skips a bit.

# page
moon wombat,dot
Dot: That skip looks like a wink.
Wombat: The star did not turn off at all.

# page
sky wombat,dot
Dot: So moving air bends the light.
Wombat: The twinkle is a clue about air.

# page
sky wombat,dot
Dot: On a very still night, stars twinkle less.
Wombat: Less moving air means less bend.

# page
moon wombat,dot
Dot: The steady light was there the whole time.
Wombat: Our air was wiggling the view.

# page
sky wombat,dot
Dot: That bright one does not twinkle as much.
Wombat: That one is a planet, not a star.

# page
sky wombat,dot
Dot: Why does a planet twinkle less?
Wombat: It looks bigger in the sky.

# page
moon wombat,dot
Dot: A bigger spot is not one tiny point.
Wombat: The wiggles blend across its face.

# page
moon wombat,dot
Dot: A star looks like a tiny point.
Wombat: A point cannot blend those bends.

# page
sky wombat,dot
Dot: So the star flashes more than the planet.
Wombat: The planet looks bigger, so it looks steady.

# page
sky wombat,dot
Dot: Are the planets we see closer than stars?
Wombat: Yes, the night planets are much closer.

# page
moon wombat,dot
Dot: That is why they look bigger to us.
Wombat: Closer worlds show a real face.

# page
sky wombat,dot
Dot: Far stars stay points in our sky.
Wombat: Huge and far can still look tiny.

# page
meadow wombat,dot
Dot: City lights far away can twinkle too.
Wombat: They are points, just like stars.

# page
meadow wombat,dot
Dot: Their light also crosses moving air.
Wombat: So a far lamp can flash and fade.

# page
burrow wombat,dot
Dot: A close lamp looks steady in your hand.
Wombat: It looks bigger, so the bends blend.

# page
moon wombat,dot
Dot: Clouds can hide both stars and planets.
Wombat: A clear night is the best test.

# page
sky wombat,dot
Dot: Do not blame a cloud for every wink.
Wombat: On a clear night the air still moves.

# page
burrow wombat,dot
Dot: You can see air bend light at home.
Wombat: Heat a kettle and look past the heat.

# page
burrow wombat,dot
Dot: The air above the kettle is moving.
Wombat: Look at a far edge through that air.

# page
burrow wombat,dot
Dot: The edge seems to wiggle and shift.
Wombat: Hot air and cool air bend the light.

# page
meadow wombat,dot
Dot: A hot road can show the same wiggle.
Wombat: Look low across the road at noon.

# page
meadow wombat,dot
Dot: The far side seems to ripple and bend.
Wombat: Moving hot air is bending that view.

# page
meadow wombat,dot
Dot: Nothing on the far side really moved.
Wombat: The air between you did the bending.

# page
sky wombat,dot
Dot: Star light gets the same kind of bend.
Wombat: Night air moves, so stars seem to twinkle.

# page
moon wombat,dot
Dot: The star stays steady the whole time.
Wombat: Your view is what jumps around.

# page
moon wombat,dot
Dot: Pick one star and watch it with care.
Wombat: Then find a planet that looks calm.

# page
sky wombat,dot
Dot: The star should twinkle more than the planet.
Wombat: The planet should look bigger and steady.

# page
sky wombat,dot
Dot: Still air makes both of them calmer.
Wombat: A wild mix of air makes more twinkle.

# page
burrow wombat,dot
Dot: The kettle, the road, and the sky agree.
Wombat: Moving air bends light and makes a wiggle.

# page
moon wombat,dot
Dot: A tiny point shows that wiggle most.
Wombat: A bigger face hides it and looks steady.

# page
sky wombat,dot
Dot: Stars twinkle, and they are not winking.
Wombat: Planets twinkle less because they look bigger.

# page
meadow wombat,dot
Dot: You can check both on a clear night.
Wombat: You can check hot air in the day.

# page
moon wombat,dot
Dot: Twinkle is a story about air.
Wombat: The steady light was there all along.
`}),f({id:"wombat-storm",title:"Why Do We See Lightning First?",seriesId:"wonder-wombat",episode:5,genre:"nonfiction",subgenre:"science",themes:["science","weather"],ladderLevel:7,expectedMinutes:8,stretchEligible:!0,glossary:[u("lightning","A giant spark in a storm cloud."),u("thunder","The sound that spark makes."),u("farther","More distant.")],talkAbout:"If a storm is near, where is a safe place to wait, and how can you tell if it is moving away?",comprehension:[b("Why do we see lightning before we hear thunder?",[["fast","Light is much faster than sound","⚡"],["eyes","Ears are broken","👂"],["wind","Wind hides sound","🍃"]],"fast","recall"),b("What does a longer wait mean?",[["far","The storm is farther away","📏"],["near","The storm is in the room","🏠"],["done","The storm is over forever","✅"]],"far","inference")],script:`
# page
meadow wombat,dot
Dot: A bright flash just lit the clouds.
Wombat: The boom will come a bit later.

# page
meadow wombat,dot
Dot: Why do we see the flash first?
Wombat: Let us name the flash and the boom.

# page
sky wombat,dot
Dot: I guess the clouds bump and then boom.
Wombat: People say that, but it is wrong.

# page
sky wombat,dot
Dot: A bump would make sound with no flash.
Wombat: This boom comes with a giant spark.

# page
burrow wombat,dot
Dot: That spark in the sky is lightning.
Wombat: Thunder is the sound that spark makes.

# page
sky wombat,dot
Dot: The spark heats the air very fast.
Wombat: The hot air jumps out and makes thunder.

# page
meadow wombat,dot
Dot: So why does the flash win the race?
Wombat: Light and sound do not travel the same.

# page
meadow wombat,dot
Dot: I guess our ears are just too slow.
Wombat: Your ears are fine, and they work fast.

# page
sky wombat,dot
Dot: Light from the spark is much faster.
Wombat: Sound is quick, but light is quicker.

# page
sky wombat,dot
Dot: The flash hits your eyes almost at once.
Wombat: The thunder needs more time to arrive.

# page
meadow wombat,dot
Dot: They left the spark at the same time.
Wombat: Light just got here long before sound.

# page
meadow wombat,dot
Dot: A short wait means the storm is close.
Wombat: A longer wait means the storm is farther.

# page
burrow wombat,dot
Dot: You can count the seconds in the gap.
Wombat: Count from the flash to the boom.

# page
burrow wombat,dot
Dot: About five counts means about one mile.
Wombat: More counts mean the storm is farther.

# page
meadow wombat,dot
Dot: Ten counts would mean about two miles.
Wombat: One quick count means it is very near.

# page
burrow wombat,dot
Dot: If the wait is short, go inside now.
Wombat: Do not stand in a wide open field.

# page
meadow wombat,dot
Dot: A lone tree is not a safe spot.
Wombat: Lightning can strike the tall lone tree.

# page
burrow wombat,dot
Dot: A house is a much safer place.
Wombat: Stay there until the thunder has stopped.

# page
burrow wombat,dot
Dot: Wait through a long quiet with no thunder.
Wombat: One more boom means you still wait.

# page
sky wombat,dot
Dot: We can watch from a window inside.
Wombat: We do not need to stand on the hill.

# page
meadow wombat,dot
Dot: This same race shows up without a storm.
Wombat: Watch a friend clap across the field.

# page
meadow wombat,dot
Dot: You see the hands meet first.
Wombat: The clap sound needs time to cross.

# page
meadow wombat,dot
Dot: Light from the hands got here faster.
Wombat: Sound walked, while light raced ahead.

# page
meadow wombat,dot
Dot: A far hit in a game works too.
Wombat: You see the hit, then you hear it.

# page
meadow wombat,dot
Dot: The wait grows if you stand farther off.
Wombat: A longer wait means the hit was farther.

# page
sky wombat,dot
Dot: Lightning and the clap follow one rule.
Wombat: Light is much faster than sound.

# page
sky wombat,dot
Dot: The storm did not hide the thunder.
Wombat: The thunder was just still on the way.

# page
burrow wombat,dot
Dot: Let us count the next gap with care.
Wombat: I see the lightning, so I start now.

# page
burrow wombat,dot
Dot: One, two, three, and then the thunder.
Wombat: Three counts means the storm is not far.

# page
burrow wombat,dot
Dot: This short wait means we stay inside.
Wombat: A lone tree would be a bad roof.

# page
sky wombat,dot
Dot: The next flash has a longer gap.
Wombat: I count to eight before the thunder.

# page
sky wombat,dot
Dot: Eight counts means the storm is farther.
Wombat: It is moving off, but we still wait.

# page
burrow wombat,dot
Dot: Farther does not mean the storm is over.
Wombat: We wait until the thunder stops.

# page
sky wombat,dot
Dot: Blue sky can return while we are inside.
Wombat: We still listen for one more boom.

# page
burrow wombat,dot
Dot: A long quiet means we can step out.
Wombat: If thunder returns, we go back in.

# page
meadow wombat,dot
Dot: You can try the count in a storm.
Wombat: Stay inside by a window to do it.

# page
burrow wombat,dot
Dot: When lightning flashes, start your count.
Wombat: When thunder booms, stop and note the number.

# page
burrow wombat,dot
Dot: A bigger number means the storm is farther.
Wombat: A small number means it is close.

# page
burrow wombat,dot
Dot: Trust the count more than a wild guess.
Wombat: Five counts is about one mile away.

# page
meadow wombat,dot
Dot: Ten counts is about two miles away.
Wombat: That storm is farther than a one count storm.

# page
burrow wombat,dot
Dot: Do not stay out just to count.
Wombat: Go inside first, then you can count.

# page
meadow wombat,dot
Dot: Skip a lone tree even in light rain.
Wombat: Open fields are a poor place too.

# page
sky wombat,dot
Dot: Light wins the race every time.
Wombat: Sound comes later, and the gap tells distance.

# page
meadow wombat,dot
Dot: A long gap means farther, not all done.
Wombat: A short gap means close, so get inside.

# page
meadow wombat,dot
Dot: The far clap taught us the same race.
Wombat: We saw it first, then we heard it.

# page
sky wombat,dot
Dot: Lightning is the flash we see first.
Wombat: Thunder is the sound that follows it.

# page
burrow wombat,dot
Dot: I will count and I will go inside.
Wombat: That plan keeps you safe in a storm.

# page
sky wombat,dot
Dot: I can tell a far storm from a near one.
Wombat: And I will wait inside until it goes.
`}),f({id:"wombat-salt",title:"Why Is the Sea Salty?",seriesId:"wonder-wombat",episode:6,genre:"nonfiction",subgenre:"science",themes:A,ladderLevel:7,expectedMinutes:8,stretchEligible:!1,glossary:[u("minerals","Tiny bits of rock and salt in water."),u("evaporate","To turn from liquid into air."),u("rivers","Streams of water that flow toward a bigger body.")],talkAbout:"Rain is not salty, but the sea is. What do you think happens to the salt when seawater dries?",comprehension:[b("What carries minerals to the sea?",[["rivers","Rivers","🏞️"],["birds","Only birds","🐦"],["moons","The moon","🌙"]],"rivers","recall"),b("Why does the salt stay?",[["air","Water can evaporate, and salt does not","☀️"],["fish","Fish drink it all","🐟"],["boats","Boats scoop it out","⛵"]],"air","inference")],script:`
# page
pond wombat,dot
Dot: This pond tastes fresh on my tongue.
Wombat: The sea tastes salty, and this does not.

# page
pond wombat,dot
Dot: I guess someone dumps salt in the sea.
Wombat: That guess skips the slow daily work.

# page
meadow wombat,dot
Dot: Maybe rain falls salty on the sea.
Wombat: Let us catch rain and taste a drop.

# page
sky wombat,dot
Dot: This rain tastes fresh, not salty at all.
Wombat: So the sky is not salting the sea.

# page
meadow wombat,dot
Dot: Where does the salt start its trip?
Wombat: Look at rocks and soil after rain.

# page
meadow wombat,dot
Dot: Rain wears tiny bits off the rocks.
Wombat: Those bits are minerals from the rock.

# page
pond wombat,dot
Dot: I cannot see them in the water.
Wombat: They dissolve, so the bits are too small.

# page
pond wombat,dot
Dot: The water looks clear and still holds salt.
Wombat: A pinch of salt can hide in water.

# page
pond wombat,dot
Dot: Rivers pick up that water and move.
Wombat: Rivers carry those minerals down to the sea.

# page
meadow wombat,dot
Dot: Each hour they bring only a little.
Wombat: Day after day the little bits add up.

# page
sky wombat,dot
Dot: At the sea, a new step begins.
Wombat: The sun helps sea water evaporate.

# page
sky wombat,dot
Dot: Evaporate means the water rises into air.
Wombat: The water leaves, but the salt stays.

# page
sky wombat,dot
Dot: Salt does not ride up with the water.
Wombat: Minerals stay behind in the sea.

# page
meadow wombat,dot
Dot: That rising water can form clouds.
Wombat: Then rain falls fresh on the land again.

# page
meadow wombat,dot
Dot: The rain left its salt in the sea.
Wombat: Fresh rain can pick up new minerals.

# page
pond wombat,dot
Dot: Rivers carry them back, and the cycle runs.
Wombat: The sea keeps the salt each time.

# page
pond wombat,dot
Dot: Over a long time the sea grew salty.
Wombat: This river path is one big reason.

# page
pond wombat,dot
Dot: Is it the only reason for sea salt?
Wombat: No, some salt also comes from deep cracks.

# page
pond wombat,dot
Dot: Hot water down there carries minerals too.
Wombat: We can still test the river part here.

# page
meadow wombat,dot
Dot: A lake with no exit can get salty.
Wombat: Water leaves by sun, and salt stays in.

# page
meadow wombat,dot
Dot: Rain and rivers still feed that lake.
Wombat: If water can evaporate, the salt builds up.

# page
pond wombat,dot
Dot: The sea has no salt exit either.
Wombat: Water leaves, and minerals remain for ages.

# page
burrow wombat,dot
Dot: Try this with a pinch of salt.
Wombat: Stir it into a small cup of water.

# page
burrow wombat,dot
Dot: The salt seems to vanish in the cup.
Wombat: It did not leave, since salt can dissolve.

# page
burrow wombat,dot
Dot: Taste a tiny drop so you know.
Wombat: It should taste salty, not like plain water.

# page
burrow wombat,dot
Dot: Now let one drop sit and dry.
Wombat: Set it on a plate in the sun.

# page
sky wombat,dot
Dot: The water in the drop will evaporate.
Wombat: The salt cannot rise with that water.

# page
burrow wombat,dot
Dot: When the drop is dry, look close.
Wombat: White bits of salt should sit there.

# page
burrow wombat,dot
Dot: The water left, and the salt stayed.
Wombat: That is the sea story on a plate.

# page
burrow wombat,dot
Dot: You can do a bigger pan test too.
Wombat: Leave salty water in the sun all day.

# page
burrow wombat,dot
Dot: The water line will fall as it dries.
Wombat: The salt will stay in the pan.

# page
meadow wombat,dot
Dot: Rain on the pan would taste fresh.
Wombat: Water that rose would not taste salty.

# page
pond wombat,dot
Dot: Our fresh pond still holds a puzzle.
Wombat: Rivers may carry its minerals away.

# page
pond wombat,dot
Dot: If water flows out, minerals can leave.
Wombat: The sea has no such exit for salt.

# page
pond wombat,dot
Dot: That is why the pond stays fresh.
Wombat: And why the sea can stay salty.

# page
sky wombat,dot
Dot: Clouds hold water that left the sea.
Wombat: That water did evaporate and left the salt.

# page
meadow wombat,dot
Dot: New rain will wash more rock bits free.
Wombat: Rivers will carry those minerals again.

# page
meadow wombat,dot
Dot: I will not call rain salty now.
Wombat: You tasted it, and it was fresh.

# page
burrow wombat,dot
Dot: The white bits on the plate are proof.
Wombat: Salt stayed when the water did evaporate.

# page
pond wombat,dot
Dot: Rivers do the carrying day after day.
Wombat: The sea does the keeping year after year.

# page
pond wombat,dot
Dot: A little salt each day adds up.
Wombat: Time is why the sea tastes so salty.

# page
pond wombat,dot
Dot: Deep cracks add some salt as well.
Wombat: The river path is still a big part.

# page
burrow wombat,dot
Dot: Your cup test used no special tools.
Wombat: Salt, water, sun, and a plate were enough.

# page
burrow wombat,dot
Dot: You saw the salt after the drop dried.
Wombat: You can show a friend the white bits.

# page
sky wombat,dot
Dot: Fresh rain, salty sea, same water story.
Wombat: Water can evaporate, and salt does not.

# page
pond wombat,dot
Dot: Minerals ride in rivers to the sea.
Wombat: They stay when the water rises out.

# page
meadow wombat,dot
Dot: I will taste rain before I guess.
Wombat: A fresh taste means the salt stayed behind.

# page
pond wombat,dot
Dot: The sea is salty for a clear reason.
Wombat: Rivers bring minerals, and water can evaporate.
`}),f({id:"wombat-seasons",title:"Why Do Seasons Change?",seriesId:"wonder-wombat",episode:7,genre:"nonfiction",subgenre:"science",themes:A,ladderLevel:8,expectedMinutes:9,stretchEligible:!1,glossary:[u("tilted","Leaning, not straight up."),u("hemisphere","One half of Earth."),u("orbit","The path Earth takes around the sun.")],talkAbout:"Earth is tilted. How does the light in your window change from summer to winter?",comprehension:[b("What makes seasons change?",[["tilt","Earth is tilted as it orbits","🌍"],["hat","The sun puts on a hat","🎩"],["wind","Wind pushes the sun away","💨"]],"tilt","recall"),b("Is summer just because Earth is much closer to the sun?",[["no","No. The tilt matters more","📐"],["yes","Yes. Closer is the whole reason","🔥"],["moon","The moon blocks winter","🌑"]],"no","inference")],script:`
# page
meadow wombat,dot
Dot: Why is it hot for part of the year?
Wombat: And why does that same place turn cold later?

# page
meadow wombat,dot
Dot: I guess Earth gets much closer to the sun.
Wombat: A closer Earth would get more heat.

# page
sky wombat,dot
Dot: Is summer just a closer part of the trip?
Wombat: No, that guess misses the real cause.

# page
sky wombat,dot
Dot: The path around the sun is called an orbit.
Wombat: Earth rides that orbit all year long.

# page
sky wombat,dot
Dot: The orbit is not a perfect round ring.
Wombat: Earth is a bit nearer on one side.

# page
meadow wombat,dot
Dot: That near side is not what makes summer.
Wombat: One half of Earth can have winter then.

# page
meadow wombat,dot
Dot: If closer was the cause, both halves would heat.
Wombat: They do not share the same hot months.

# page
sky wombat,dot
Dot: So what does make the seasons change?
Wombat: Earth is tilted as it rides its orbit.

# page
sky wombat,dot
Dot: Tilted means Earth leans and is not straight up.
Wombat: The lean stays put as Earth travels on.

# page
meadow wombat,dot
Dot: Picture a line through the top and bottom.
Wombat: Earth turns around that line, and the line leans.

# page
meadow wombat,dot
Dot: One half of Earth is a hemisphere.
Wombat: The other half is a hemisphere too.

# page
meadow wombat,dot
Dot: When our hemisphere leans toward the sun, we warm.
Wombat: The light hits us in a more direct way.

# page
sky wombat,dot
Dot: Direct light packs more heat on the ground.
Wombat: The days also last longer in that season.

# page
sky wombat,dot
Dot: A long day gives the land more time.
Wombat: That is summer for our hemisphere.

# page
forest wombat,dot
Dot: Half a year later, the lean points away.
Wombat: Our hemisphere leans away from the sun.

# page
forest wombat,dot
Dot: The light comes in low and spreads out.
Wombat: Spread out light brings less heat to us.

# page
meadow wombat,dot
Dot: The days grow shorter at that time too.
Wombat: Short days and low light make winter here.

# page
meadow wombat,dot
Dot: The other hemisphere leans toward the sun then.
Wombat: That half can have summer while we do not.

# page
sky wombat,dot
Dot: The two halves do not share one season.
Wombat: They trade as Earth keeps moving on its orbit.

# page
sky wombat,dot
Dot: Does the tilt flip over each week?
Wombat: No, the tilt stays put the whole trip.

# page
meadow wombat,dot
Dot: What changes is which half leans in.
Wombat: The orbit carries each hemisphere into its turn.

# page
burrow wombat,dot
Dot: A ball and a lamp can show the lean.
Wombat: Tip the ball so its top leans in.

# page
burrow wombat,dot
Dot: Shine the lamp straight at the tipped ball.
Wombat: The near half gets a bright direct patch.

# page
burrow wombat,dot
Dot: The far half gets a weaker spread of light.
Wombat: That half is the cold hemisphere in this test.

# page
burrow wombat,dot
Dot: Now walk the ball in a slow circle.
Wombat: Keep the lean pointed the same way.

# page
burrow wombat,dot
Dot: Halfway around, the other half faces the lamp.
Wombat: The first half now gets the weak light.

# page
burrow wombat,dot
Dot: The ball never jumped closer to the lamp.
Wombat: The lean by itself changed the light.

# page
meadow wombat,dot
Dot: Summer is not just a closer orbit spot.
Wombat: The tilted hemisphere gets the stronger light.

# page
meadow wombat,dot
Dot: I can see this lean in my own shadow.
Wombat: In summer the noon sun sits high.

# page
meadow wombat,dot
Dot: A high sun makes a short shadow at noon.
Wombat: The light is more direct, so the shadow shrinks.

# page
meadow wombat,dot
Dot: In winter the noon sun stays low.
Wombat: A low sun makes your noon shadow long.

# page
sky wombat,dot
Dot: A long shadow means the light is spread out.
Wombat: Spread light is a winter sign for this hemisphere.

# page
sky wombat,dot
Dot: Your friends far south can see the trade.
Wombat: Their summer comes when your shadow grows long.

# page
meadow wombat,dot
Dot: They live in the other hemisphere.
Wombat: Their direct light comes in your cold months.

# page
burrow wombat,dot
Dot: Let me tip the ball a bit more.
Wombat: Keep one lean and only move the ball.

# page
burrow wombat,dot
Dot: The lamp stays still, like the sun.
Wombat: The ball does the moving on its orbit.

# page
meadow wombat,dot
Dot: Places near the middle get a milder change.
Wombat: The lean still changes their day length a little.

# page
meadow wombat,dot
Dot: Places near the top get a strong change.
Wombat: Summer days there can last a very long time.

# page
sky wombat,dot
Dot: In their winter the sun can stay away.
Wombat: That long dark time is the lean at work.

# page
sky wombat,dot
Dot: Earth is tilted the whole way around the sun.
Wombat: The orbit takes about one year to finish.

# page
meadow wombat,dot
Dot: Each hemisphere gets one warm turn a year.
Wombat: The cold turn comes on the far side.

# page
forest wombat,dot
Dot: Trees and coats change because the light changes.
Wombat: The sun itself is not getting hotter then.

# page
meadow wombat,dot
Dot: A hotter sun is another wrong guess.
Wombat: The sun stays steady while the lean works.

# page
burrow wombat,dot
Dot: You can try the ball test at home.
Wombat: Use any round ball and a small lamp.

# page
burrow wombat,dot
Dot: Darken the room so the lamp is the sun.
Wombat: Tip the ball and keep that tip the same.

# page
burrow wombat,dot
Dot: Shine the lamp and see which half glows strong.
Wombat: Walk a circle and watch the bright half.

# page
burrow wombat,dot
Dot: Mark the bright half with a bit of tape.
Wombat: After half a circle that mark should be dim.

# page
meadow wombat,dot
Dot: You never needed to push the ball closer.
Wombat: The tilted path was enough to change the light.

# page
sky wombat,dot
Dot: Look out at noon in summer and in winter.
Wombat: Compare how high the sun sits each time.

# page
meadow wombat,dot
Dot: A high sun and short shadow mean summer.
Wombat: A low sun and long shadow mean winter.

# page
meadow wombat,dot
Dot: That check works where you live.
Wombat: The other hemisphere would show the swap.

# page
meadow wombat,dot
Dot: If you could call a friend there, ask them.
Wombat: Their season should be the flip of yours.

# page
burrow wombat,dot
Dot: I will set the ball under the lamp again.
Wombat: Point the top lean at the lamp for summer.

# page
burrow wombat,dot
Dot: This hemisphere on the ball gets direct light.
Wombat: The bottom hemisphere gets the weak light now.

# page
burrow wombat,dot
Dot: I slide the ball to the other side.
Wombat: I do not change the way the ball leans.

# page
burrow wombat,dot
Dot: Now the bottom gets the direct light.
Wombat: The top hemisphere has winter in this spot.

# page
meadow wombat,dot
Dot: Earth does this on its real orbit.
Wombat: It is tilted the whole time it travels.

# page
sky wombat,dot
Dot: Summer is not just because we got closer.
Wombat: Being nearer is a much smaller change.

# page
meadow wombat,dot
Dot: The tilt sets which hemisphere heats up.
Wombat: Direct light and long days make the warm turn.

# page
meadow wombat,dot
Dot: The ball test and the shadow test agree.
Wombat: Earth is tilted as it moves on its orbit.
`}),f({id:"wombat-bees",title:"How Do Bees Find Flowers?",seriesId:"wonder-wombat",episode:8,genre:"nonfiction",subgenre:"science",themes:A,ladderLevel:8,expectedMinutes:9,stretchEligible:!0,glossary:[u("nectar","A sweet liquid flowers make."),u("pollen","A powder flowers use to make seeds."),u("ultraviolet","A kind of light people cannot see.")],talkAbout:"Bees tell other bees where to go. How do people share a useful find without pushing?",comprehension:[b("What do flowers offer bees?",[["food","Nectar and pollen","🌸"],["rocks","Rocks","🪨"],["snow","Snow","❄️"]],"food","recall"),b("What does the waggle dance tell?",[["way","The way and about how far","💃"],["name","The flower's name","🏷️"],["time","What year it is","📅"]],"way","inference")],script:`
# page
garden wombat,dot
Dot: How does a bee find a flower so fast?
Wombat: Let us watch one work this bright bed.

# page
garden wombat,dot
Dot: I guess she checks every bloom with no plan.
Wombat: A garden is huge for a bee that small.

# page
meadow wombat,dot
Dot: Random checks would waste most of the day.
Wombat: She has better tools than a wild guess.

# page
garden wombat,dot
Dot: Flowers call out with color, shape, and smell.
Wombat: A bee can use all three on one trip.

# page
garden wombat,dot
Dot: Many flowers also wear marks we cannot see.
Wombat: Those marks are ultraviolet light on the petals.

# page
meadow wombat,dot
Dot: People cannot see ultraviolet light at all.
Wombat: Bees can see it, and it guides them in.

# page
garden wombat,dot
Dot: The marks point toward the middle of the bloom.
Wombat: That is where the nectar and the pollen are.

# page
garden wombat,dot
Dot: Nectar is the sweet sip the flower makes.
Wombat: Pollen is the powder that can make seeds.

# page
meadow wombat,dot
Dot: The bee drinks nectar to fuel her flight.
Wombat: She also packs pollen on her back legs.

# page
garden wombat,dot
Dot: Some pollen sticks to her body as she crawls.
Wombat: At the next flower that powder can rub off.

# page
meadow wombat,dot
Dot: The flower uses that pollen to make seeds.
Wombat: The bee gets food, and the plant gets help.

# page
garden wombat,dot
Dot: When she finds a rich patch, she flies home.
Wombat: Home is the hive, full of other bees.

# page
meadow wombat,dot
Dot: I guess she leads them back one by one.
Wombat: She does not walk them there like a guide.

# page
garden wombat,dot
Dot: In the dark hive she does a waggle dance.
Wombat: The dance is a map made of moves.

# page
garden wombat,dot
Dot: What does the waggle dance tell the others?
Wombat: It tells the way and about how far.

# page
meadow wombat,dot
Dot: The angle of her waggle shows the way.
Wombat: Straight up in the hive stands for the sun.

# page
meadow wombat,dot
Dot: A waggle to the right of up means turn.
Wombat: They keep that same angle from the sun.

# page
garden wombat,dot
Dot: A longer waggle means the patch is farther away.
Wombat: A short waggle means the flowers are closer.

# page
meadow wombat,dot
Dot: So the dance is not the flower name.
Wombat: Bees do not need a name to find it.

# page
meadow wombat,dot
Dot: It does not tell what year it is.
Wombat: The dance points the way to food.

# page
garden wombat,dot
Dot: The other bees watch the dance in the hive.
Wombat: Then they fly off along that path.

# page
garden wombat,dot
Dot: Smell on her body can add a clue too.
Wombat: The scent of the flower rides home with her.

# page
meadow wombat,dot
Dot: Suppose one patch is near and one is far.
Wombat: A short waggle can point to the near patch.

# page
meadow wombat,dot
Dot: A long waggle can point to the far patch.
Wombat: The flowers may match, but the distance does not.

# page
garden wombat,dot
Dot: The hive mates read both dances and choose.
Wombat: They can send more bees to the richer patch.

# page
garden wombat,dot
Dot: Bees can also learn which colors paid off.
Wombat: A color that held nectar today gets a return.

# page
meadow wombat,dot
Dot: They skip empty blooms and return to good ones.
Wombat: The dance plus what they learned speeds the search.

# page
sky wombat,dot
Dot: Wind and rain can change the search.
Wombat: A noon bloom may shut before dusk.

# page
meadow wombat,dot
Dot: So they must check, not trust one old map.
Wombat: A new dance can update the hive.

# page
garden wombat,dot
Dot: You can try this by watching a real bee.
Wombat: Stand a safe distance from the flower.

# page
garden wombat,dot
Dot: Stay still and do not swat or grab.
Wombat: A bee on a bloom is busy with food.

# page
garden wombat,dot
Dot: Watch her head go toward the middle.
Wombat: That is where the nectar and pollen sit.

# page
garden wombat,dot
Dot: See if she crawls in and then backs out.
Wombat: Pollen may show as bright dust on her legs.

# page
meadow wombat,dot
Dot: When she leaves, do not chase her home.
Wombat: Her dance will happen where we cannot see.

# page
meadow wombat,dot
Dot: You can still act out the waggle dance.
Wombat: Pick a tree to stand in for the sun.

# page
meadow wombat,dot
Dot: Face a bit left or right of that tree.
Wombat: That angle is the way the bee would tell.

# page
meadow wombat,dot
Dot: Now waggle and count your steps out loud.
Wombat: More steps mean the flower is farther away.

# page
meadow wombat,dot
Dot: Ask a friend to follow your angle and steps.
Wombat: If they find the spot, the dance worked.

# page
garden wombat,dot
Dot: A real bee does this with no spoken words.
Wombat: The other bees read the moves and go.

# page
garden wombat,dot
Dot: Flowers offer nectar and pollen, not tricks.
Wombat: The sweet sip and the powder are the pay.

# page
meadow wombat,dot
Dot: Ultraviolet marks help her hit the middle fast.
Wombat: We miss those marks, so the bloom looks plain.

# page
garden wombat,dot
Dot: To a bee that plain bloom shows a path.
Wombat: The path leads in toward nectar and pollen.

# page
garden wombat,dot
Dot: She may visit many blooms on one flight.
Wombat: Each visit can move pollen to a new flower.

# page
meadow wombat,dot
Dot: That is how many plants get to make seeds.
Wombat: She was after food, and the plant got help.

# page
meadow wombat,dot
Dot: Both sides gain, so both keep at the work.
Wombat: Flowers still offer nectar and pollen each day.

# page
garden wombat,dot
Dot: A poor patch does not earn a long dance.
Wombat: Fewer bees will waste a trip on empty blooms.

# page
meadow wombat,dot
Dot: A rich patch earns a strong waggle.
Wombat: The way and the distance get clear news.

# page
garden wombat,dot
Dot: The hive gets the news with no drawn map.
Wombat: Moves, angle, and step counts carry it.

# page
garden wombat,dot
Dot: Let us watch one more bee on a bloom.
Wombat: She aims for the middle, then she drinks.

# page
garden wombat,dot
Dot: I see dust on her legs as she leaves.
Wombat: That dust is pollen she will carry on.

# page
sky wombat,dot
Dot: She flies off in a straight line now.
Wombat: She may be heading home to dance the way.

# page
meadow wombat,dot
Dot: Later other bees may find this same bed.
Wombat: One dance today can guide the next trips.

# page
garden wombat,dot
Dot: If you watch, keep your hands down and still.
Wombat: Bees sting to defend, so give them room.

# page
garden wombat,dot
Dot: A safe distance still lets you see the visit.
Wombat: You can count how long she stays there.

# page
meadow wombat,dot
Dot: Then point and count steps like her dance.
Wombat: A friend should be able to find your spot.

# page
meadow wombat,dot
Dot: If they miss, change the angle and try again.
Wombat: Bees repeat the dance so others can read it.

# page
garden wombat,dot
Dot: Color, smell, and ultraviolet marks start the find.
Wombat: The waggle dance shares the find with the hive.

# page
meadow wombat,dot
Dot: Nectar feeds the flight, and pollen feeds the young.
Wombat: Seeds are the plant pay for that trade.

# page
meadow wombat,dot
Dot: She has a plan, not a random wander.
Wombat: Senses find the bloom, and the dance shares it.

# page
garden wombat,dot
Dot: Watch a bee, or point and count the steps.
Wombat: Either try shows how the news can travel.
`}),f({id:"wombat-moon",title:"Why Does the Moon Change Shape?",seriesId:"wonder-wombat",episode:9,genre:"nonfiction",subgenre:"science",themes:["science","sky"],ladderLevel:9,expectedMinutes:10,stretchEligible:!1,glossary:[u("crescent","A thin curved slice of light."),u("phase","The shape of the lit moon we can see."),u("reflects","Bounces light instead of making it.")],talkAbout:"The moon stays round. Sketch it once this week and again a few nights later. What changed?",comprehension:[b("Does the moon make its own light?",[["no","No. It reflects sunlight","🌙"],["yes","Yes. It is a lamp","💡"],["fire","Yes. It is on fire","🔥"]],"no","recall"),b("Why does the shape seem to change?",[["half","We see a different amount of the lit half","🌓"],["bite","Something bites it","🍪"],["melt","It melts each night","💧"]],"half","inference")],script:`
# page
moon wombat,dot
Dot: Last week the moon was a thin bright curve.
Wombat: Tonight more of it glows, and that change has a name.

# page
moon wombat,dot
Dot: I guess something takes a bite out of the moon.
Wombat: A bite would leave crumbs, and we never see those.

# page
sky wombat,dot
Dot: Maybe it melts a little and then grows back.
Wombat: Rock does not melt and reform every few weeks.

# page
sky wombat,dot
Dot: Another guess says Earth shadow paints the shape.
Wombat: Earth shadow does happen, but that is a rare eclipse.

# page
moon wombat,dot
Dot: An eclipse is not the monthly change we see.
Wombat: Most nights the shape is a phase, not a shadow show.

# page
meadow wombat,dot
Dot: Does the moon make its own light like a lamp?
Wombat: No, the moon reflects sunlight from the sun.

# page
sky wombat,dot
Dot: One half of the moon is lit by that sunlight.
Wombat: The other half is dark because it faces away.

# page
moon wombat,dot
Dot: The moon itself stays round the whole time.
Wombat: A round ball does not turn into a thin slice.

# page
sky wombat,dot
Dot: Then why does the bright part seem to change?
Wombat: We see more or less of the lit half.

# page
moon wombat,dot
Dot: The moon travels around Earth as the month goes on.
Wombat: Our view of the lit half shifts as it moves.

# page
moon wombat,dot
Dot: In a crescent phase we see only a slim edge.
Wombat: A crescent is a thin curved slice of the lit half.

# page
sky wombat,dot
Dot: A full moon means we face the whole lit half.
Wombat: The dark half is on the far side, out of view.

# page
burrow wombat,dot
Dot: A ball, a lamp, and a dark room can show this.
Wombat: The lamp is the sun, and the ball is the moon.

# page
burrow wombat,dot
Dot: Your head is Earth, and your eyes are the view.
Wombat: Hold the ball out and turn in a slow circle.

# page
burrow wombat,dot
Dot: Put the ball so you are between it and the lamp.
Wombat: Your head may block the light if it lines up.

# page
burrow wombat,dot
Dot: Raise the ball a little so your head shadow misses it.
Wombat: Now you should see the full moon phase.

# page
burrow wombat,dot
Dot: Now hold the ball between your face and the lamp.
Wombat: You mostly see the dark half, which is the new moon.

# page
burrow wombat,dot
Dot: Shift the ball a little to one side of the lamp.
Wombat: A thin bright edge appears, and that is a crescent.

# page
moon wombat,dot
Dot: The ball stayed round in every spot you tried.
Wombat: Only the lit amount in your view changed.

# page
sky wombat,dot
Dot: Nothing took a bite, and nothing melted the ball.
Wombat: You just saw a new amount of the lit half.

# page
meadow wombat,dot
Dot: Hold the ball straight out to your left.
Wombat: About half of the face you see is lit.

# page
meadow wombat,dot
Dot: People call that look a half moon phase.
Wombat: You see half of the lit side from this angle.

# page
burrow wombat,dot
Dot: Move the ball onward and the bright part grows fat.
Wombat: That fatter phase still comes from the same round ball.

# page
burrow wombat,dot
Dot: Keep going until the bright face is full again.
Wombat: You have walked the phase cycle once around.

# page
sky wombat,dot
Dot: A thin slice is a crescent phase.
Wombat: A full face is the full phase of the moon.

# page
moon wombat,dot
Dot: The shape name tracks how much lit half we see.
Wombat: The moon never swaps its round body for a new one.

# page
sky wombat,dot
Dot: Earth shadow would creep across the full face in an eclipse.
Wombat: A phase grows over many nights, not in one dark hour.

# page
moon wombat,dot
Dot: You can watch for a real eclipse on rare news nights.
Wombat: Do not use that rare event to explain every phase.

# page
meadow wombat,dot
Dot: A shiny ball in real sunlight shows the same split.
Wombat: One half stays bright and the other half stays dark.

# page
meadow wombat,dot
Dot: Walk around it and the bright shape seems to change.
Wombat: The ball did not change, and your view did.

# page
sky wombat,dot
Dot: From the moon, Earth would show phases too.
Wombat: They would see more or less of Earth's lit half.

# page
sky wombat,dot
Dot: Earth would still be round while its phase changed.
Wombat: The same rule works for any ball in sunlight.

# page
moon wombat,dot
Dot: The moon phase changes a little each night.
Wombat: About one month brings the same phase back again.

# page
moon wombat,dot
Dot: If you look every clear night, you can see the shift.
Wombat: Clouds can hide a phase, but they do not reshape it.

# page
meadow wombat,dot
Dot: Draw the moon tonight and leave room for the next sketch.
Wombat: Three nights later the bright slice should have changed.

# page
moon wombat,dot
Dot: If the bright part is growing, you head toward full.
Wombat: If it is shrinking, you head toward a thin crescent.

# page
burrow wombat,dot
Dot: In the dark room the lamp light reflects off the ball.
Wombat: The ball makes no light, just as the moon makes none.

# page
burrow wombat,dot
Dot: The phase you see depends on where you stand.
Wombat: Move your feet and you get a new phase.

# page
burrow wombat,dot
Dot: Stay still and move the ball, and the phase changes too.
Wombat: That matches the moon moving around Earth.

# page
meadow wombat,dot
Dot: At new moon the lit half faces away from us.
Wombat: The moon is still there, even when the sky looks empty.

# page
sky wombat,dot
Dot: A crescent shows near sunrise or sunset in the sky.
Wombat: You see just a slim edge of the lit half then.

# page
sky wombat,dot
Dot: The full moon sits far from the sun in the sky.
Wombat: You are looking at the whole lit half on that night.

# page
meadow wombat,dot
Dot: That is why the full moon can light up the ground.
Wombat: It reflects a lot of sunlight straight back toward us.

# page
burrow wombat,dot
Dot: At full face, lift the ball so your head misses it.
Wombat: If your head blocks the lamp, that is a tiny eclipse.

# page
burrow wombat,dot
Dot: A tiny head shadow is not the monthly phase.
Wombat: Shift up and the full lit face comes back.

# page
moon wombat,dot
Dot: I will check the real moon with the same idea.
Wombat: I will ask how much of the lit half shows.

# page
moon wombat,dot
Dot: A crescent means a thin slice, not a broken moon.
Wombat: The rest of the round moon is still up there.

# page
moon wombat,dot
Dot: On a clear crescent night, the dark part may glow faintly.
Wombat: Earth reflects some sunlight onto that dark part.

# page
sky wombat,dot
Dot: That faint glow is not the moon making light.
Wombat: Sunlight bounced off Earth and then off the moon.

# page
sky wombat,dot
Dot: Two bounces, and still the moon makes none of its own.
Wombat: Both the phase and that faint glow are bounced light.

# page
burrow wombat,dot
Dot: Darken the room, set a lamp, and hold a ball.
Wombat: Turn in place and name each phase you see.

# page
burrow wombat,dot
Dot: Call the thin edge a crescent when it first shows.
Wombat: Call the full bright face a full phase.

# page
burrow wombat,dot
Dot: Call the half lit face a half moon phase.
Wombat: Each name is a view, not a new moon shape.

# page
meadow wombat,dot
Dot: The real moon will match your ball if you are patient.
Wombat: Check it for a few clear nights in a row.

# page
meadow wombat,dot
Dot: Sketch the bright part and note if it grows or shrinks.
Wombat: Growing heads toward full, and shrinking heads toward crescent.

# page
sky wombat,dot
Dot: The moon stays round while the phase keeps changing.
Wombat: We see more or less of the lit half each time.

# page
moon wombat,dot
Dot: Sunlight does the lighting, and the moon reflects it.
Wombat: No bite, no melt, and no nightly eclipse is needed.

# page
moon wombat,dot
Dot: A crescent, a half, and a full face are one ball.
Wombat: The phase is how much of that lit ball we face.

# page
burrow wombat,dot
Dot: The lamp and ball showed that the moon stays round.
Wombat: They also showed why the bright shape seems to change.

# page
moon wombat,dot
Dot: I will look up and name the phase I see.
Wombat: I will know the moon reflects sunlight and stays round.
`}),f({id:"wombat-day",title:"Why Do We Have Day and Night?",seriesId:"wonder-wombat",episode:10,genre:"nonfiction",subgenre:"science",themes:A,ladderLevel:9,expectedMinutes:10,stretchEligible:!0,glossary:[u("spins","Turns around a center."),u("axis","The line a planet spins around."),u("horizon","The line where the sky seems to meet the land.")],talkAbout:"The sun is not racing around Earth each day. What do you notice about shadows from morning to evening?",comprehension:[b("What causes day and night?",[["spin","Earth spins","🌍"],["run","The sun runs around us each day","🏃"],["lamp","Someone switches a sky lamp","💡"]],"spin","recall"),b("Why does the sun seem to move?",[["turn","We turn and the view changes","🔄"],["pull","Clouds pull the sun","☁️"],["hide","The moon hides it on purpose","🌙"]],"turn","inference")],script:`
# page
meadow wombat,dot
Dot: The sun seems to rise, cross the sky, and set.
Wombat: It slips under the horizon at the end of the day.

# page
meadow wombat,dot
Dot: I guess the sun races around a still Earth.
Wombat: That guess matches the view, so it feels strong.

# page
sky wombat,dot
Dot: If Earth sat still, the sun would have to circle us.
Wombat: A daily race like that is not what happens.

# page
meadow wombat,dot
Dot: Earth spins, and we are the ones turning.
Wombat: The sun stays put while our ground turns under us.

# page
sky wombat,dot
Dot: Earth turns around a line called its axis.
Wombat: That axis runs through the north pole and the south pole.

# page
burrow wombat,dot
Dot: A fruit, a pin, and a lamp can show the spin.
Wombat: The pin stands for the axis through the fruit.

# page
burrow wombat,dot
Dot: Spin the fruit and the lamp stays still.
Wombat: One side goes bright, then dark, then bright again.

# page
burrow wombat,dot
Dot: The pin side did not make the lamp run around.
Wombat: The fruit did the turning, just as Earth spins.

# page
sky wombat,dot
Dot: The side of Earth facing the sun has day.
Wombat: The side facing away from the sun has night.

# page
meadow wombat,dot
Dot: Your town rides on one side as Earth spins.
Wombat: When your town faces the sun, you have day.

# page
meadow wombat,dot
Dot: Sunrise is your place turning into the light.
Wombat: You come over the edge from night into day.

# page
sky wombat,dot
Dot: Sunset is your place turning out of the light.
Wombat: You head past the horizon into the dark side.

# page
sky wombat,dot
Dot: The sun seems to move because we turn.
Wombat: The view changes, and that makes the sun seem to travel.

# page
meadow wombat,dot
Dot: A ride in a car shows the same kind of trick.
Wombat: Trees seem to slide past, but you are the one moving.

# page
meadow wombat,dot
Dot: The trees are not racing beside the road.
Wombat: Your motion makes still things seem to drift by.

# page
sky wombat,dot
Dot: The sun is like those trees in this one way.
Wombat: It is not racing, and our spin makes it seem to.

# page
burrow wombat,dot
Dot: Shadows change from morning to late day because we spin.
Wombat: A stick in the ground can make that easy to see.

# page
meadow wombat,dot
Dot: In the morning the sun is low near the horizon.
Wombat: Low light skims the ground and the shadow grows long.

# page
meadow wombat,dot
Dot: Near noon the sun is high for many places.
Wombat: High light makes the stick shadow short and tight.

# page
meadow wombat,dot
Dot: By late day the sun is low again.
Wombat: The shadow grows long on the other side of the stick.

# page
meadow wombat,dot
Dot: The sun did not jump, and the stick did not move.
Wombat: Earth spins, so the light angle on the stick changed.

# page
sky wombat,dot
Dot: Earth spins from the west toward the east.
Wombat: That is why the sun seems to rise in the east.

# page
sky wombat,dot
Dot: Your spot turns east into the morning light.
Wombat: You keep turning until the sun sets in the west.

# page
meadow wombat,dot
Dot: The horizon in the east is the morning gate.
Wombat: The west horizon is where the sun seems to leave.

# page
burrow wombat,dot
Dot: Long ago, people trusted the racing sun idea.
Wombat: The view from the ground really does look like a race.

# page
meadow wombat,dot
Dot: A wrong first idea can match what your eyes see.
Wombat: Tests later showed that Earth spins on its axis.

# page
burrow wombat,dot
Dot: The fruit test does not prove the whole sky by itself.
Wombat: It shows how a spin can fool the view from the ground.

# page
meadow wombat,dot
Dot: Night is not a blanket someone pulls over the town.
Wombat: It is your half of Earth facing away from the sun.

# page
sky wombat,dot
Dot: Day is not a lamp someone switches on in the sky.
Wombat: It is your half turning to face the sunlight.

# page
sky wombat,dot
Dot: One full spin takes about one day and night.
Wombat: That is why day and night keep trading places.

# page
meadow wombat,dot
Dot: The axis stays the line we spin around.
Wombat: We do not spin around a random new line each morning.

# page
meadow wombat,dot
Dot: You can try this with a stick in the ground.
Wombat: Pick a sunny spot that stays clear all day.

# page
meadow wombat,dot
Dot: Push the stick in so it stands straight up.
Wombat: Mark the tip of its shadow in the morning.

# page
meadow wombat,dot
Dot: Come back near noon and mark the shadow again.
Wombat: The noon mark should sit closer to the stick.

# page
meadow wombat,dot
Dot: Come back late in the day and mark it once more.
Wombat: That mark should be long and on a new side.

# page
meadow wombat,dot
Dot: Those marks show that the shadow moved.
Wombat: A third mark shows the move did not stop at noon.

# page
burrow wombat,dot
Dot: You can do a small version on a table too.
Wombat: Spin a fruit by a lamp and watch its tiny shadow.

# page
burrow wombat,dot
Dot: The shadow swings as the fruit spins.
Wombat: The lamp stayed still while the shadow moved.

# page
meadow wombat,dot
Dot: Your stick shadow swings for the same reason.
Wombat: Earth spins, so the sunlight hits from a new angle.

# page
sky wombat,dot
Dot: The horizon is where the sky seems to meet the land.
Wombat: Hills, trees, or a flat field can make that line.

# page
sky wombat,dot
Dot: At sunset the sun seems to sink under the horizon.
Wombat: Your eyes see a sunset, but you are turning away.

# page
meadow wombat,dot
Dot: At sunrise it seems to climb over the horizon.
Wombat: Your place on Earth is turning into the light.

# page
sky wombat,dot
Dot: If Earth did not spin, this daily trip would stop.
Wombat: One side would stay in day and one side in night.

# page
meadow wombat,dot
Dot: The orbit still moves Earth around the sun.
Wombat: That long trip makes the year, not the day.

# page
sky wombat,dot
Dot: Day and night come from the spin on our axis.
Wombat: Seasons come from the lean of that same axis.

# page
burrow wombat,dot
Dot: Watch the fruit and say when your pin side has day.
Wombat: Day is when that side faces the lamp.

# page
burrow wombat,dot
Dot: Say night when that side faces away.
Wombat: Keep the lamp still so the test stays fair.

# page
meadow wombat,dot
Dot: The sun is not racing around us each day.
Wombat: We spin, and the view from the ground changes.

# page
sky wombat,dot
Dot: Clouds do not pull the sun across the sky.
Wombat: That is another wrong guess the view can spark.

# page
moon wombat,dot
Dot: The moon does not hide the sun to make night.
Wombat: Night comes even when the moon is up in the sky.

# page
meadow wombat,dot
Dot: A moon in the day sky still leaves the land bright.
Wombat: Day stays until your place spins away from the sun.

# page
meadow wombat,dot
Dot: I will mark a stick shadow two times today.
Wombat: Morning and late day should give two long marks.

# page
meadow wombat,dot
Dot: If I add noon, that mark should be the short one.
Wombat: A short shadow means the sun is high over us.

# page
sky wombat,dot
Dot: Look at the horizon at sunrise and at sunset.
Wombat: Name east for the rise and west for the set.

# page
sky wombat,dot
Dot: Those names match the way Earth spins.
Wombat: We turn toward the east, into the morning light.

# page
burrow wombat,dot
Dot: The pin in the fruit is my model of the axis.
Wombat: When I spin the fruit, I copy what Earth does.

# page
burrow wombat,dot
Dot: The lamp does not chase the fruit.
Wombat: The sun does not chase Earth around the sky each day.

# page
meadow wombat,dot
Dot: Shadows, sunrise, and sunset all fit one spin.
Wombat: A racing sun is the guess that does not hold.

# page
sky wombat,dot
Dot: The horizon is only the edge of our view.
Wombat: Past it, the sun still shines on places that have day.

# page
meadow wombat,dot
Dot: Earth spins on its axis and makes day and night.
Wombat: The sun seems to move because we turn past the horizon.
`}),...T,...k,...M],H={book:"Pages with a story or facts.",glow:"A soft light.",door:"A way in or out.",friend:"Someone you like and trust.",sky:"The blue or grey space above you.",light:"What lets you see.",train:"A line of cars that rolls on tracks.",lion:"A big wild cat.",mouse:"A very small animal.",help:"To make something easier for someone.",story:"Something that happens, told in words.",blue:"The color of a clear daytime sky.",water:"The clear liquid you drink.",sound:"What you hear.",storm:"Strong wind, rain, and sometimes thunder.",flash:"A sudden bright light.",tree:"A tall plant with a trunk.",letter:"A written note to someone.",change:"When something becomes different.",fair:"When people are treated with care.",both:"The two of them, not just one.",small:"Little in size.",free:"Able to go. Not trapped.",planet:"A world that travels around a star.",quiet:"With very little sound.",scared:"Feeling fear.",brave:"Ready to try, even with a wobble.",kind:"Gentle and helpful."};function S(e){return{id:e.id,title:e.title,seriesId:e.seriesId,episode:e.episode,genre:e.genre,subgenre:e.subgenre,themes:e.themes,ladderLevel:e.ladderLevel,status:e.status,stretchEligible:e.stretchEligible,expectedMinutes:h(n(e)),talkAbout:e.talkAbout,wordCount:o(e),sample:e.sample}}function L(e){return P.filter(a=>a.seriesId===e).sort((e,a)=>e.episode-a.episode)}e.s(["catalog",0,function(){return P.filter(e=>"reviewed"===e.status).map(S)},"defineWord",0,function(e,a=[]){let t=i(e);if(!t)return null;let o=a.find(e=>e.word.toLowerCase()===t);if(o)return o.definition;for(let e of P){let a=e.glossary.find(e=>e.word.toLowerCase()===t);if(a)return a.definition}for(let e of d){let a=e.glossary.find(e=>e.word.toLowerCase()===t);if(a)return a.definition}return H[t]??null},"nextEpisode",0,function(e){return L(e.seriesId).find(a=>a.episode===e.episode+1)},"seriesById",0,function(e){return p.find(a=>a.id===e)},"storiesInSeries",0,L,"storyById",0,function(e){return P.find(a=>a.id===e)},"toMeta",0,S],6654)}]);