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
/*STORY SCRIPT*/


var conversations = [
    {
        "numofchars": 0,
        "activespeaker": "",
        "hexcolor": "#5A5475",
        "speaker": "",
        "conline": "[He can wait. The fans cannot.]",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Too many people have come today, hoping to be whisked away by your magic, Natsume-kun.",
        "char2tag": "T14",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "This is the nature of being an idol, you know? The trends that pave the future are ephemeral, and fans have grown accustomed to change.",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "The three of us together form Switch.",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "That holds true now, but...",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "In the end, you are the light that will touch those hearts.",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I’d hate to miss a show, but if we’re being pragmatic here, wasting time tending to me now will only hold you back.",
        "char2tag": "T16",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "SenPAI. Do I look like a “hero” to yOU?",
        "char2tag": "T16",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Are you expecting an inspiring speech to ease away your self-deprecative tendencIES?",
        "char2tag": "T16",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "If this is the extent of your reSOLVE, then I should just leave you here to dwell on the futility of your own WORDS.",
        "char2tag": "T16",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Ah, I’ve made you angry again...",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Even after all this time, I still haven’t learned your heart properly, huh? Natsume-kun.",
        "char2tag": "T11",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "How long will you keep demeaning yourself like tHAT?",
        "char2tag": "T11",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Repentance is a lifelong endeavour, after all. ♪",
        "char2tag": "T1",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "But if I say more, I don’t think you’ll be pleased.",
        "char2tag": "T16",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Forget it THEN.",
        "char2tag": "T16",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "The live will go on with or without yOU, so fill me in on what needs to be done before Sora gets heRE.",
        "char2tag": "T16",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "I’ll be your eyes and hands for the time beING.",
        "char2tag": "T16",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Almost like we’re two halves of one whole, just like back then?~",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Taking this time to reminisce like an old mAN... Read the room alreaDY.",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "I won’t wait forever for you, you knOW? Tsumugi nii-sAN.",
        "char2tag": "T2",
        "char1tag": "N7",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Yes, yes.",
        "char2tag": "T1",
        "char1tag": "N7",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Just once more, Natsume-kun, let’s dance in tandem as the two of us.",
        "char2tag": "T2",
        "char1tag": "N7",
        "bg": "BG1"
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
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "In the end, the contractors were pretty understanding about the situation.",
        "char2tag": "T7",
        "char1tag": "N1",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "You’d think they’d be frustrated about their hard work going to waste, but they just brought in more plaster and filled the gap like it was nothing.",
        "char2tag": "T3",
        "char1tag": "N1",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "It’s their specialTY, after aLL.",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "If we asked them to join us on our electrifying staGE, do you think they would be able to keep up with our years of training as idoLS?",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Still, it’s a skill worth admiring. I’m sure they think that our own performances are nothing short of miraculous.",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "HMPH. Muse about it all you waNT.",
        "char2tag": "T1",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "CoincidentaLLY, the type of customers I like the least when I’m doing fortune telling work are those who rely on other people to solve their probleMS.",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Is that an indirect way of taking a jab at me? You’re starting to master the art of subtlety, huh... ♪",
        "char2tag": "T16",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Enough alreaDY. Spinning even my scoldings into a positiVE...",
        "char2tag": "T16",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Even if you can’t feel paIN, are you so far gone that you’re unable to pick up on the dissent of those around yOU, TOO?",
        "char2tag": "T16",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Then keel over and let the flames of Hell consume yOU.",
        "char2tag": "T16",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "You say that, but you seem happier now than before... If I were guessing, I’d say you missed me.",
        "char2tag": "T12",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Though I didn’t even think my absence would be felt, if I’m being honest with you...",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "When the number of members in a unit amounts to a feeble thrEE, some aspects of the performance will feel off with one missING, obviousLY.",
        "char2tag": "T8",
        "char1tag": "N4",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "You’re lucky that Sora and I were able to improvise around the dancES.",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I’d like to think that it’s because we had you around to save the day, Natsume-kun.",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Since my lucky colours today are red and white... ♪ Having the live today really paid off.",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "As alwAYS, you keep yourself satiated on your flimsy idea of fortuNE. If you bEG, I will deign to give you a proper reading mySELF.",
        "char2tag": "T1",
        "char1tag": "N7",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Coming from Natsume-kun, that sounds like a threat...?!",
        "char2tag": "T13",
        "char1tag": "N7",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "That’s your own fault for buying into every little scheme that preys on feeble-minded folk like yourSELF.",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "If I told you here and now that your lucky colours will always be red and whiTE, would you believe ME?",
        "char2tag": "T13",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "If it’s you saying so, then...",
        "char2tag": "T13",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Of course!",
        "char2tag": "T1",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Even as the years go by, Natsume-kun remains my most treasured lucky charm.",
        "char2tag": "T8",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "FuFU. How shameleSS. It seems Senpai has finally fallen under my speLL. ♪",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Ahaha. Even from backstage, I was enraptured by your performance.",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I did wonder if the overhauled currency system would make things harder to set up, seeing as Eichi-kun has brought forth a new era for all idols...",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "But the live this time was rather dreamlike in quality, so I can’t complain...~",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Always praising President-san like thAT, you really are like a shameless dog yapping at his heELs.",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "(Daring to call it dreamlike...)",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "(When without Senpai, it felt...)",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Compared to the face you were showing before, this one...",
        "char2tag": "T15",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I can tell you’re feeling sour. Is your heart twisted up again, Natsume-kun?",
        "char2tag": "T13",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "What’s with that pacifying toNE?.",
        "char2tag": "T13",
        "char1tag": "N4",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "For someone only a year oldER, you have a lot of nerVE.",
        "char2tag": "T13",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "There’s no point to this if you come away from today thinking that you aren’t an essential cog in the clockwork that makes up Switch.",
        "char2tag": "T13",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Phrasing it like that... makes your connection to the Five Eccentrics all the more obvious, hehe.",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Though Shu-kun wouldn’t be happy if I said that, huh?",
        "char2tag": "T8",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Ah, your string is...—",
        "char2tag": "T13",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "String? You’re being incomprehensibLE, SenPAI.",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Could it be that Shu nii-san has used you as a pincushion one too many tiMES, and you are seeing threads and needles where they don’t exiST?",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "On your pinky finger.",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I can feel it, tugging around my own, as you curl into yourself and keep your feelings hidden from me.",
        "char2tag": "T15",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "But you know... The thing I like least of all is seeing you in pain.",
        "char2tag": "T16",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "...And who says I’m in paIN?",
        "char2tag": "T16",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Like you saID, the three of us are points on a constellation that can continue to exiST, even if the lights underneath end up obscuring the staRS.",
        "char2tag": "T16",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "All sorts of applications are in development nowaDAYS, where people can point their devices to the sky and detect all sorts of informatiON.",
        "char2tag": "T16",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "The constellation’s naME, its histoRY, fun facts to make the paragraphs more palatabLE...",
        "char2tag": "T16",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Switch has emerged in an age where these miracles are commonplaCE.",
        "char2tag": "T16",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Mm, I get the feeling I’m not catching on to the deeper meaning here.",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "But technology is indeed useful.",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "It can even preserve histoRY, after aLL.",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Even the memories of the three of us as SwitCH.",
        "char2tag": "T1",
        "char1tag": "N1",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I see... So even Natsume-kun can get hung up on the little things.",
        "char2tag": "T3",
        "char1tag": "N1",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "...HonestLY. Where is your resolve when it comes to keeping the three of us togethER?",
        "char2tag": "T3",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Weren’t you too relaxed about letting us go on without yOU?",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": "Even though Sora had gone and made a fuss when my fortune telling clouded my judgemeNT, making me lose sight of the dream I shared with...",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": ".........",
        "char2tag": "T3",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Natsume-kun.",
        "char2tag": "T15",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Please turn around.",
        "char2tag": "T15",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "hexcolor": "#E74F52",
        "speaker": "Natsume",
        "conline": ".........",
        "char2tag": "T15",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "My hand is outstretched, you know. This might even be your first time seeing it this way.",
        "char2tag": "T13",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "You’ve been busy marching forward, too fixated on your future to look fondly back on the past.",
        "char2tag": "T13",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "But haven’t I always been here, following along behind you?",
        "char2tag": "T14",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "As your meek, weak-willed, good-for-nothing Senpai.",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "I want to pull you back towards me, to keep you smiling for the rest of your days.",
        "char2tag": "T9",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Forsaking my life for it, and letting you throw me away after... is my “ideal”.",
        "char2tag": "T11",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "That’s why, even with the live from earlier, I was happy enough to be watching from the wings.",
        "char2tag": "T11",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Am I really deserving of such bliss? ♪ Of getting to walk with you now, on the roads built atop the corpses I’ve created with my own two hands...?",
        "char2tag": "T16",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "hexcolor": "#5A5475",
        "speaker": "Tsumugi",
        "conline": "Will you let me tug back at the red string of fate?",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG4"
    }
]