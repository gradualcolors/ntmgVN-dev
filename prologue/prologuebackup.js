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
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": ".........",
        "charsingle": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "...Ah, hello! Yes, it’s Aoba Tsumugi. We spoke earlier, I believe?",
        "charsingle": "T1",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": ".........",
        "charsingle": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Of course! Actually, the live is still going on as planned... but, well. Some complications have come up.",
        "charsingle": "T1",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Out of curiosity, what sort of plaster did you procure for the construction of the set?",
        "charsingle": "T1",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "The woodwork is wonderful, but there’s a certain thinness to the backdrop that I find quite concerning, and...",
        "charsingle": "T2",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "SenPAI.",
        "charsingle": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Eeeek...?!",
        "char2tag": "T3",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Natsume-kun?! Please warn me next time...! It seems I've accidentally hung up on our contractors in the middle of an important call...?!",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Our live is in less than an hoUR, so do you mind explaining the sorry sight that has disgraced my EYES?",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Are you, perchance, referring to my haircut? I’m glad you noticed...!",
        "char2tag": "T1",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "You see, one of my mother’s friends opened up a home-based salon service recently.",
        "char2tag": "T3",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "And instead of getting my hair forcibly trimmed by Keito-kun again, I figured paying this small business a visit would be putting good karma out into the world—",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "SenPAI, why are you in a fucking wALL.",
        "char2tag": "T2",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Oh.",
        "char2tag": "T3",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I suppose that's also a predicament.",
        "char2tag": "T3",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "It’s actually quite a long story... ♪",
        "char2tag": "T1",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Sum it up or I'll start throwing rocks at yOU.",
        "char2tag": "T1",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Ehh?! There's no mercy in your tone at all?!",
        "char2tag": "T3",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Even though my afternoon was lost, running errands...",
        "char2tag": "T3",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "And then catering to Eichi-kun’s whims and my own mother’s minute requests...!",
        "char2tag": "T3",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Hmph. When will you realise that your actions have consequencES?",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "If you’re still fraternising with that all-important Emperor of yoURS, then you deserve to undergo the repercussiONS.",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Exploiting your weak-willed disposition is one of his many open secret hobbIES.",
        "char2tag": "T3",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Even thEN, Senpai still lets him get away with IT. Encourages being taken advantage OF, just like thAT.",
        "char2tag": "T3",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Aha... I suppose that’s one way to look at it. Even if it doesn’t seem that way, Eichi-kun and I can be called something like friends now.",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "But as with all royals born with a silver spoon in their mouths, he overindulges in what he likes.",
        "char2tag": "T4",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Being on the receiving end is tiring...",
        "char2tag": "T4",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "By the time I got here, I barely remembered how to think...",
        "char2tag": "T4",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "That’s why I thought to take a breather, you know? To spend some time gathering my bearings after a busy start.",
        "char2tag": "T1",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "So I leaned against this wall, and at first it didn’t register that it was pressing strangely against my back.",
        "char2tag": "T1",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Until it caved in.",
        "char2tag": "T1",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "And put my head ruthlessly through the plaster.",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": ".........",
        "char2tag": "T2",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "That hardly explains why your arms are also needlessly trappED.",
        "char2tag": "T2",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "But you told me to keep it brief...!?",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I wasn’t able to free myself without feeling like my head would fall off and roll away from me forever, like some kind of approximation of Frankenstein’s monster...",
        "char2tag": "T1",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "So I decided to get out the opposite way, by wiggling my torso forward.",
        "char2tag": "T1",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Somehow, my arms got through without the rest of my body following suit, but I figured I could at least turn this way so the light would stop hurting my eyes. ",
        "char2tag": "T1",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "That’s when I got the idea to call the contractors.",
        "char2tag": "T1",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Which, actually, I should get back to... Excuse me, Natsume-kun.",
        "char2tag": "T2",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Right on cUE.",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Eh?",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "As of nOW, their business hours have come to a cloSE.",
        "char2tag": "T3",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Ehhh?!",
        "char2tag": "T3",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "How unfortunaTE. Your savioURS, mere puppets to the strings of capitaLISM, have all clocked out and gone on their merry wAY.",
        "char2tag": "T3",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "It seems nothing can be done about the predicament nOW, seeing as you refused to call on me to help yOU.",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "N-Natsume-kun?!",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "You will be dearly missed by your fANS, I’m sure, but some circumstances simply cannot be helpED.",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Please don’t say it like you’re watching me die!",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "No, even before that! Your jealousy this time is akin to that of a former only child, who has to bear the burden of having a younger sibling for the first time...?!",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "A shame indeED.",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I was ignored so petulantly...!",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "To be honest with yOU, I don’t foresee you coming away from this unscathED. ",
        "char2tag": "T3",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "These jagged edges have ensnared you so thoroughly that any interference could prove disastroUS.",
        "char2tag": "T3",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Dare you test your faTE?",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG1"
    }
]