/*Modifiable variables*/

var spriteCharA_ID = "N";
var spritecharB_ID = "T";
/*VARIABLES*/

var speakerA = "Natsume";
var speakerB = "Tsumugi";

var chapter = "assets/sprites/";

//var bgs = ["BG_Game_Club_Room.jpg", "Pool_BG_1.jpg", "Pool_BG_2.jpg"];
var cgs = ["CG1.jpg", "CG2.jpg", "CG3.jpg"];
/*STORY SCRIPT*/


var conversations = [
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "...",
        "char1tag": "N",
        "char1imgid": 1,
        "char2tag": "T",
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "...Ah, hello! Yes, it’s Aoba Tsumugi. We spoke earlier, I believe?",
        "char1tag": "N",
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "...",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Of course! Actually, the live is still going on as planned... but, well. Some complications have come up.",
        "char1tag": "N",
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Out of curiosity, what sort of plaster did you procure for the construction of the set?",
        "char1tag": "N",
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "The woodwork is wonderful, but there’s a certain thinness to the backdrop that I find quite concerning, and...",
        "char1tag": "N",
        "char2tag": "T",
        "char2imgid": 2,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "SenPAI.",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Eeeek...?!",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Natsume-kun?! Please warn me next time...! It seems I've accidentally hung up on our contractors in the middle of an important call...?!",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 2,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Our live is in less than an hoUR, so do you mind explaining the sorry sight that has disgraced my EYES?",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 2,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Are you, perchance, referring to my haircut? I’m glad you noticed...!",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "You see, one of my mother’s friends opened up a home-based salon service recently.",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "And instead of getting my hair forcibly trimmed by Keito-kun again, I figured paying this small business a visit would be putting good karma out into the world—",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 2,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "SenPAI, why are you in a fucking wALL.",
        "char1tag": "N",
        "char1imgid": 4,
        "char2tag": "T",
        "char2imgid": 2,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Oh.",
        "char1tag": "N",
        "char1imgid": 1,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I suppose that's also a predicament.",
        "char1tag": "N",
        "char1imgid": 1,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "It’s actually quite a long story... ♪",
        "char1tag": "N",
        "char1imgid": 1,
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Sum it up or I'll start throwing rocks at yOU.",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Ehh?! There's no mercy in your tone at all?!",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Even though my afternoon was lost, running errands...",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "And then catering to Eichi-kun’s whims and my own mother’s minute requests...!",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Hmph. When will you realise that your actions have consequencES?",
        "char1tag": "N",
        "char1imgid": 4,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "If you’re still fraternising with that all-important Emperor of yoURS, then you deserve to undergo the repercussiONS.",
        "char1tag": "N",
        "char1imgid": 4,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Exploiting your weak-willed disposition is one of his many open secret hobbIES.",
        "char1tag": "N",
        "char1imgid": 1,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Even thEN, Senpai still lets him get away with IT. Encourages being taken advantage OF, just like thAT.",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Aha... I suppose that’s one way to look at it. Even if it doesn’t seem that way, Eichi-kun and I can be called something like friends now.",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 2,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "But as with all royals born with a silver spoon in their mouths, he overindulges in what he likes.",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 4,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Being on the receiving end is tiring...",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 4,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "By the time I got here, I barely remembered how to think...",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 4,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "That’s why I thought to take a breather, you know? To spend some time gathering my bearings after a busy start.",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "So I leaned against this wall, and at first it didn’t register that it was pressing strangely against my back.",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Until it caved in.",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "And put my head ruthlessly through the plaster.",
        "char1tag": "N",
        "char1imgid": 2,
        "char2tag": "T",
        "char2imgid": 2,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "...",
        "char1tag": "N",
        "char1imgid": 1,
        "char2tag": "T",
        "char2imgid": 2,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "That hardly explains why your arms are also needlessly trappED.",
        "char1tag": "N",
        "char1imgid": 4,
        "char2tag": "T",
        "char2imgid": 2,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "But you told me to keep it brief...!?",
        "char1tag": "N",
        "char1imgid": 4,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I wasn’t able to free myself without feeling like my head would fall off and roll away from me forever, like some kind of approximation of Frankenstein’s monster...",
        "char1tag": "N",
        "char1imgid": 4,
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "So I decided to get out the opposite way, by wiggling my torso forward.",
        "char1tag": "N",
        "char1imgid": 4,
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Somehow, my arms got through without the rest of my body following suit, but I figured I could at least turn this way so the light would stop hurting my eyes. ",
        "char1tag": "N",
        "char1imgid": 4,
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "That’s when I got the idea to call the contractors.",
        "char1tag": "N",
        "char1imgid": 4,
        "char2tag": "T",
        "char2imgid": 1,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Which, actually, I should get back to... Excuse me, Natsume-kun.",
        "char1tag": "N",
        "char1imgid": 4,
        "char2tag": "T",
        "char2imgid": 2,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Right on cUE.",
        "char1tag": "N",
        "char1imgid": 3,
        "char2tag": "T",
        "char2imgid": 2,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Eh?",
        "char1tag": "N",
        "char1imgid": 3,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "As of nOW, their business hours have come to a cloSE.",
        "char1tag": "N",
        "char1imgid": 1,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Ehhh?!",
        "char1tag": "N",
        "char1imgid": 1,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "How unfortunaTE. Your savioURS, mere puppets to the strings of capitaLISM, have all clocked out and gone on their merry wAY.",
        "char1tag": "N",
        "char1imgid": 1,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "It seems nothing can be done about the predicament nOW, seeing as you refused to call on me to help yOU.",
        "char1tag": "N",
        "char1imgid": 3,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "N-Natsume-kun?!",
        "char1tag": "N",
        "char1imgid": 3,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "You will be dearly missed by your fANS, I’m sure, but some circumstances simply cannot be helpED.",
        "char1tag": "N",
        "char1imgid": 3,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Please don’t say it like you’re watching me die!",
        "char1tag": "N",
        "char1imgid": 3,
        "char2tag": "T",
        "char2imgid": 2,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "No, even before that! Your jealousy this time is akin to that of a former only child, who has to bear the burden of having a younger sibling for the first time...?!",
        "char1tag": "N",
        "char1imgid": 3,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "A shame indeED.",
        "char1tag": "N",
        "char1imgid": 3,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I was ignored so petulantly...!",
        "char1tag": "N",
        "char1imgid": 3,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "To be honest with yOU, I don’t foresee you coming away from this unscathED. These jagged edges have ensnared you so thoroughly that any interference could prove disastroUS.",
        "char1tag": "N",
        "char1imgid": 1,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Dare you test your faTE?",
        "char1tag": "N",
        "char1imgid": 3,
        "char2tag": "T",
        "char2imgid": 3,
        "bg": "card_gacha_background_full1_2156_evolution"
    }
];