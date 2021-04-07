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
        "conline": "[Let Tsumugi pull the string.]",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Fufu. You'll really spend the rest of your life pining for ME?",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "And if I never look baCK? What would you do thEN? ",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I'll have faith in the fact that we'll find each other again. ",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Because that's fate, you know? ♪",
        "char2tag": "T16",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Quit hogging all the cool-sounding monologuES, SenPAI.",
        "char2tag": "T16",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "If you're going to take my haND, then do it alreaDY. I want to go hoME.",
        "char2tag": "T16",
        "char1tag": "N4",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Aren't I far too old to be standing out here having flashbacks to my cushy childhoOD?",
        "char2tag": "T16",
        "char1tag": "N6",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Sorry, sorry...! I'll put my hand down and coddle you verbally instead. ",
        "char2tag": "T2",
        "char1tag": "N6",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "I was making a joKE, you knOW...",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "WhatevER, come ON. You buy into my words so easiLY, it's laughabLE.",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Being guillible runs in the family, I suppose? Though I'm not so weak-willed as my mother.",
        "char2tag": "T7",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I definitely won't fall into any shady cults while your back is turned, at least!",
        "char2tag": "T7",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "...When you say it like thAT, it makes me worry for reAL.",
        "char2tag": "T7",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "To think I can have any effect on you at all... Hehe. That makes me happy.",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(I truly don't mind if you tire of me someday, and push me away for good. When that day comes, please tell me outright, so I don't keep hoping for something inevitable.)",
        "char2tag": "T1",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(But, right here, right now, for just a little longer...)",
        "char2tag": "T11",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(Please.)",
        "char2tag": "T11",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(Let me stay by your side.)",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "You're making that face agaIN. The one that tells me you're lost in the paST, thinking stupid thinGS.",
        "char2tag": "T8",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "...Hm. There's something I've been meaning to revisit lately, so you're not wrong.",
        "char2tag": "T14",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Ah, I should preface this with an important question first, though. Do you trust me?",
        "char2tag": "T1",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "If it's SenPAI... I won't objeCT.",
        "char2tag": "T1",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "That's wHY... Say it plainly if you're asking for permission to take me somewheRE.",
        "char2tag": "T1",
        "char1tag": "N4",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "If you're able to bear with it, we can even hold hands like we used to. ♪",
        "char2tag": "T8",
        "char1tag": "N4",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "...If it'll keep you from talking incessantLY, and begging me with that insufferable toNE.",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Even I can permit it if your requests are harmleSS.",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "After all... Isn't it a senior's duty to spoil their alluriNG, handsome junioRS? ♪",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(So don't look at me like you aren't always in my peripheral vision. You're so hopelessly oblivioUS.)",
        "char2tag": "T8",
        "char1tag": "N1",
        "bg": "BG4"
    },
    {
        "numofchars": 0,
        "bg": "fade_black"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Is it okay to be this close?",
        "char2tag": "T14",
        "char1tag": "N1",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "If you're already holding me by the waiST, is there a point in asking nOW?",
        "char2tag": "T14",
        "char1tag": "N8",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "As I've mentionED, I'm fiNE.",
        "char2tag": "T14",
        "char1tag": "N8",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "You're rather prickly at times, you know, like a cat. I want things to be okay every step of the way, so I'll keep asking just to make sure.",
        "char2tag": "T10",
        "char1tag": "N8",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "We're closer now than we used to be, so if I overstep, it'll hurt us both.",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Don't be mindful about the wrong thinGS. Your priorities are seriously twistED, SenPAI.",
        "char2tag": "T8",
        "char1tag": "N4",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "I'm surprised that you've been able to keep pace with the musIC, since you're normally so clumSY.",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "You could consider this my area of expertise.",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Dancing comes as naturally to me as breathing, especially if it's to a slow, classical song. ",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Ballet is unfamiliar territory to you, so I can't just make you stand en pointe all willy-nilly.",
        "char2tag": "T16",
        "char1tag": "N3",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "That's why I'm glad you still remember how to waltz like this.",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "It's three stePS. ",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "And a lot of coordination!",
        "char2tag": "T6",
        "char1tag": "N8",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "We'd be in a sorry state if we couldn't at least dance in syNC. We're idoLS.",
        "char2tag": "T6",
        "char1tag": "N9",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Even so... This is an entirely different type of stage. Brings back memories, doesn't it?",
        "char2tag": "T7",
        "char1tag": "N9",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Is there a reason you brought us heRE, SenPAI? Sentiment alone won't cut IT.",
        "char2tag": "T7",
        "char1tag": "N2",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Would you believe me if I said I wanted an excuse to dance with you?",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "I wouLD... but that isn't the whole truTH, is IT?",
        "char2tag": "T2",
        "char1tag": "N1",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "You overthink too much for this display of masochism to encompass everything going on in that head of youRS.",
        "char2tag": "T2",
        "char1tag": "N1",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "You're a magician, Natsume-kun. Don't break the spell before the night ends. Not when it's been this gentle to you and I both.",
        "char2tag": "T11",
        "char1tag": "N1",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Aren't we always hurting each other? ",
        "char2tag": "T9",
        "char1tag": "N1",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "The fact that we can create a moment like this, after everything...",
        "char2tag": "T9",
        "char1tag": "N1",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "It makes me hope that our string of fate will go somewhere good, for once. That it won't lead you to your doom.",
        "char2tag": "T8",
        "char1tag": "N1",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": ".........",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Do I deserve to be so endlessly protected by you?",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I... don't have an answer to that. And if I did, I'd be a hypocrite.",
        "char2tag": "T5",
        "char1tag": "N5",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Because I truthfully don't feel like I deserve anything myself. All of the good that has shaped our present feels so distant, still, like if I get complacent it'll disappear.",
        "char2tag": "T3",
        "char1tag": "N5",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "But I want to believe...",
        "char2tag": "T7",
        "char1tag": "N5",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "That we have a future together, beyond just Switch.",
        "char2tag": "T7",
        "char1tag": "N5",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "So, even though I shouldn't be asking any more of you than I already have, will you wait for me?",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Don't say things ensared in piTY. If you use words like thAT, it's dangerous for me tOO.",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "After everythiNG, haven't you asked too little of ME?",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Of all the things to want for from a fortune tellER...",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Only an idiot would ask for tiME.",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(One, two, three; one, two, three—)",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Natsume-kun.",
        "char2tag": "T9",
        "char1tag": "N2",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Please?",
        "char2tag": "T8",
        "char1tag": "N2",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": ".........",
        "char2tag": "T8",
        "char1tag": "N2",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Okay, SenPAI.",
        "char2tag": "T8",
        "char1tag": "N1",
        "bg": "BG21"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "I'll wait, but not forevER. ",
        "char2tag": "T2",
        "char1tag": "N4",
        "bg": "CG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "I'm... not impenetrabLE, after aLL. There are things in this world that can still hurt ME.",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "CG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "All the time in the world wouldn't satiate your slowneSS, thouGH, so I'll say it plainLY. Hurry up and fall in love with ME.",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "CG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I'll work hard at it, so when the time comes... Please, meet me in the middle.",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "CG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(A slow, building fire... the sort of flame one struggles to keep alive, nestled away within my chest.)",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "CG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(This is the kind that burns the longest, in the end.)",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "CG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(That's why, Natsume-kun... Until it sets us aflame, will you dance with me?)",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "CG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "......... ♪",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "CG3"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "......... ♪",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "CG3"
    }
]