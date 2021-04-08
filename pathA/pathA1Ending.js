/*Modifiable variables*/

var spriteCharA_ID = "N";
var spritecharB_ID = "T";
var spritecharC_ID = "S";
/*VARIABLES*/

var speakerA = "Natsume";
var speakerB = "Tsumugi";
var speakerC = "Sora";


var charAcolor = "#E74F52";
var charBcolor = "#5A5475";
var charCcolor = "#6aa84f";
//var bgs = ["BG_Game_Club_Room.jpg", "Pool_BG_1.jpg", "Pool_BG_2.jpg"];
var cgs = ["CG1.jpg", "CG2.jpg", "CG3.jpg"];
var bgs = ["../assets/backgrounds/BG2.png", "../assets/backgrounds/BG3.png", "../assets/backgrounds/BG20.png"];
/*STORY SCRIPT*/


var conversations = [
    {
        "numofchars": 0,
        "activespeaker": "",
        "hexcolor": "#5A5475",
        "speaker": "",
        "conline": "[Words from the heart.]",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "There are few things in this world you’ve done that I can truly thank you fOR.",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "But if you spend the rest of your days in repentanCE, and give yourself wholly to ME...",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Then yours is a heart worth protectiNG.",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Good NigHT.",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Natsume-kun, wait.",
        "char2tag": "T13",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "If you desire more praiSE, I’ll put a tax on IT.",
        "char2tag": "T13",
        "char1tag": "N9",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Making a joke like that is cruel, Natsume-kun...! You saw how much I had to hand over to the contractors!",
        "char2tag": "T10",
        "char1tag": "N9",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Fufu. That is precisely why I’m taking advantage of the situatiON",
        "char2tag": "T10",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Maybe you’ll learn a lesson or two about standing your grouND, instead of helplessly bending to my desirES.",
        "char2tag": "T10",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Pff... aha...",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "...WhAT.",
        "char2tag": "T8",
        "char1tag": "N4",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Ehehe. ♪",
        "char2tag": "T2",
        "char1tag": "N4",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "What is IT, alreaDY?",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Sorry, sorry. I’m just unbearably happy over how affectionate you are.",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "It’s not often that we get to see each other like this.",
        "char2tag": "T1",
        "char1tag": "N5",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Just a little longer... May I stay by your side?",
        "char2tag": "T1",
        "char1tag": "N5",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Retrograde is upon us tonigHT.",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "I’d rather you take a break before pushing yourself agaIN, but afterwARDS...",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "You know where to find ME",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "When you speak so cryptically, it takes a bit of effort to slot the puzzle pieces together.",
        "char2tag": "T5",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I’m the sort of person who will run around in circles, going between all sorts of spots on the off-chance that you’ll evade my predictions, you know?",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "And then after I’ve exhausted all my options, I’d head towards the Secret Room normally...",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "But it’s been a while since I’ve stepped onto Yumenosaki grounds.",
        "char2tag": "T9",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "FuFU. Can’t make it too easy for yOU, after aLL.",
        "char2tag": "T9",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Come to me after your showER. If you keep me waiting, I’ll show you what a real tantrum looks liKE.",
        "char2tag": "T9",
        "char1tag": "N9",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "That’s a strange request...? I don’t smell, do I?",
        "char2tag": "T3",
        "char1tag": "N9",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "(Sniff, sniff.)",
        "char2tag": "T15",
        "char1tag": "N9",
        "bg": "BG2"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I don’t think I— Natsume-kun? You’re walking away?",
        "charsingle": "T13",
        "bg": "BG2"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Eh? You’re going faster?!",
        "charsingle": "T3",
        "bg": "BG2"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Natsume-kuuun...!!?",
        "charsingle": "T3",
        "bg": "BG2"
    },
    {
        "numofchars": 0,
        "activespeaker": "",
        "hexcolor": "lightblue",
        "speaker": "",
        "conline": "",
        "bg": "fade_black"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Natsume-kun.",
        "charsingle": "T1",
        "bg": "BG3"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Did I keep you waiting?",
        "charsingle": "T1",
        "bg": "BG3"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "The cruel reality of the world is that some dreams are born to DIE.",
        "charsingle": "N8",
        "bg": "BG3"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "That’s not at all related to what I just said. ♪",
        "charsingle": "T16",
        "bg": "BG3"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Well, given that this is the post-Chuunibyou stage...",
        "charsingle": "T8",
        "bg": "BG3"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I suppose you are at the age to spout off unprompted about all sorts of depressing things... give or take a few years.",
        "charsingle": "T2",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "To resuscitate a dream with our electricity and keep its pulse steady is our own way of reaching out to the people around US",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "After aLL, Switch is a magical party of everlasting happiNESS.",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "When we first mET...",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Do you remember the words I bestowed upon yOU?",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "It was a precious gem of a memory to me. An heirloom I’d pass down to future generations, if it was tangible.",
        "char2tag": "T7",
        "char1tag": "N9",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Naturally, I don’t think I could ever forget.",
        "char2tag": "T7",
        "char1tag": "N9",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Though it’s the sort of statement that, when spoken by an adorable child, will haunt you for the rest of your days?",
        "char2tag": "T16",
        "char1tag": "N9",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "“You’ve never had a dream”, is what you said, peering into my eyes..",
        "char2tag": "T3",
        "char1tag": "N9",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Normal children don’t usually say such disturbing things, so I was thinking I’d stumbled into a horror movie...",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Calling my younger self abnormAL... At least show some remorse over using such thoughtless phrasiNG.",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "The person standing before you now is ME, so take a good look at the preseNT.",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Sorry, sorry. ♪ I’m unusually lost in thought, it seems. My eyes are on you now, so don’t get mad~",
        "char2tag": "T1",
        "char1tag": "N5",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "There’s a dissonance between Natsume-chan and Natsume-kun that draws me in, is all.",
        "char2tag": "T11",
        "char1tag": "N5",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "You seem happier living your life this way, so even though my recollection of that time was nothing but warm, maybe because I want to cling onto simpler times...",
        "char2tag": "T11",
        "char1tag": "N5",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I like the Natsume-kun that hits me without meaning it. The one that calls me all sorts of unsavoury things, flitting his gaze away all the while.",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "After all, this is your truest self, isn’t it?",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "You have enough sense to know this muCH, at leaST.",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "But you should knock it off with that weird masochiSM.",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "If it’s Natsume-kun, I can’t help but get excited being shown this side of you?",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "You really are an idiOT.",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "In the eND, the lacklustre prince that you were as a chiLD...",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "...ended up taking on my own dream of becoming an idOL.",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "I always hoped for someone cooler to grasp my hand and lead me towards that futuRE.",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "But you were the one who reached out to ME, and dried my teARS, and praised my smile to the point where I believed every word you saID.",
        "char2tag": "T3",
        "char1tag": "N9",
        "bg": "BG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "You were my first love, you know.",
        "char2tag": "T3",
        "char1tag": "N9",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Natsume-kun...",
        "char2tag": "T7",
        "char1tag": "N9",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "I can hear your smiLE. How irritatiNG.",
        "char2tag": "T7",
        "char1tag": "N5",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I was too young to understand it back then. The gravity of a dream. The things it would entail.",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "All I knew was the way you always followed me around with sparkling eyes, pouting away until I paid attention to you...",
        "char2tag": "T3",
        "char1tag": "N5",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "And that was enough for me, long ago.",
        "char2tag": "T14",
        "char1tag": "N5",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "So I’m sorry, you know, for forgetting everything. .",
        "char2tag": "T11",
        "char1tag": "N5",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "WeLL, it’s not like I was waiting for you all these yeARS.",
        "char2tag": "T11",
        "char1tag": "N4",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Even now, under the stars, you really aren’t honest with yourself...",
        "char2tag": "T8",
        "char1tag": "N4",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I’m sorry for being the worthless type of Senpai, who can’t force out all the words you want to hear because I need it spelled out for me.",
        "char2tag": "T11",
        "char1tag": "N4",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "It might be because I’m a coward that I refuse to bite down on the parts of you I like.",
        "char2tag": "T10",
        "char1tag": "N4",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "There you go with that loose tongue of yours, mouthing off so brazenLY. Spit it out if you have something worthwhile to SAY.",
        "char2tag": "T10",
        "char1tag": "N8",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I can count on both hands how many years it’s been, you know? ♪ Since that day.",
        "char2tag": "T6",
        "char1tag": "N8",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Sometimes I look back on it all, and quietly lament that I’ve destroyed your good memories of me.",
        "char2tag": "T9",
        "char1tag": "N8",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Building from the ashes of those bridges long burned seems daunting, but...",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I’ve come to know the undertones of your heart.",
        "char2tag": "T7",
        "char1tag": "N8",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "That’s why... Have you been lonely, lately? I’m sorry, Natsume-kun.",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Hmph. You’re being presumpTUOUS.",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "My tolerating your company is neither here nor tHERE. I didn’t agree to come out here and stargaze because of something as childish as lonelinESS.",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Then, about that first love confession—",
        "char2tag": "T3",
        "char1tag": "N9",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Mojacko.",
        "char2tag": "T3",
        "char1tag": "N6",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Wait, don’t change the...?",
        "char2tag": "T13",
        "char1tag": "N6",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "MopHEAD. Bird’s neST. Sewer-breaTH.",
        "char2tag": "T13",
        "char1tag": "N3",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I’m being bullied again?! The youth of today really don’t respect their elders at all...!",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Who said anything about yOU?",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG20"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "I’m merely naming the constellations that I see tonigHT.",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG20"
    },
    {
        "numofchars": 0,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "This oNE, as showy and insignificant as it IS, will be named ‘good-for-nothing nii-san’ in tribute to someone I once knEW.",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "CG1"
    },
    {
        "numofchars": 0,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "And this one... ♪",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "CG1"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "(Natsume-kun, did I ever end up growing into the prince you wished for so long ago?)",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "CG1"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "(Rather than calling this a fairy tale ending, it seems more like a subversion of happily ever afters.)",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "CG1"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "(To the you who could love me as I was, and to the you who loves me as I am...)",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "CG1"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "(Haven’t we become happy together? You and me.)",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "CG1"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "(That’s why, until the day I die, I want to be kept spellbound by you.)",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "CG1"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "(After all, my feelings for you now are... ♪)",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "CG1"
    }
]