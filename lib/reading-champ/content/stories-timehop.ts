import { g, makeStory, q } from "./script";

export const TIMEHOP_STORIES = [
  makeStory({
    id: "timehop-train",
    title: "The First Passenger Train",
    seriesId: "time-hop",
    episode: 1,
    genre: "nonfiction",
    subgenre: "history",
    themes: ["history", "trains"],
    ladderLevel: 7,
    expectedMinutes: 12,
    stretchEligible: true,
    glossary: [
      g("passenger", "A person who rides, but does not drive."),
      g("carriages", "The cars that people sat in."),
      g("engine", "The machine that pulled the train."),
      g("families", "People who belong together, like parents and children."),
    ],
    talkAbout: "The train was exciting and a little scary. What new thing felt like both to you?",
    comprehension: [
      q(
        "What did Asha and Rafi visit?",
        [["train", "An early train", "🚂"], ["rocket", "A rocket", "🚀"], ["boat", "A boat", "⛵"]],
        "train",
        "recall",
      ),
      q(
        "How did people feel about it?",
        [["both", "Amazed and scared", "😮"], ["only", "Only sleepy", "😴"], ["none", "Nobody noticed", "🙈"]],
        "both",
        "inference",
      ),
    ],
    script: `
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
`,
  }),
  makeStory({
    id: "timehop-letter",
    title: "Two Views of the Same Train",
    seriesId: "time-hop",
    episode: 2,
    genre: "nonfiction",
    subgenre: "history",
    themes: ["history", "fairness"],
    ladderLevel: 9,
    expectedMinutes: 12,
    stretchEligible: true,
    glossary: [
      g("porter", "A worker who helped people with bags."),
      g("history", "The story of what people did long ago."),
      g("different", "Not the same."),
      g("everyone", "All of the people."),
      g("timeline", "A simple line that shows what happened first and next."),
    ],
    talkAbout: "The guard and the porter felt differently. How can two people both be telling the truth?",
    comprehension: [
      q(
        "Who missed the quiet road?",
        [["guard", "The station guard", "💂"], ["mouse", "The mouse", "🐭"], ["wombat", "Wombat", "🐾"]],
        "guard",
        "recall",
      ),
      q(
        "Why was the porter glad?",
        [["sister", "He could visit his sister", "💌"], ["race", "He won a race", "🏁"], ["gold", "He found gold", "💰"]],
        "sister",
        "inference",
      ),
      q(
        "What idea are Asha and Rafi holding?",
        [["both", "Both views can matter", "🤝"], ["one", "Only the loudest view", "📣"], ["none", "Stories do not matter", "🚫"]],
        "both",
        "inference",
      ),
    ],
    script: `
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
`,
  }),
];
