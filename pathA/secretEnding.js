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
var bgs = ["../assets/backgrounds/BG2.png", "../assets/backgrounds/BG12.png", "../assets/backgrounds/BG20.png"];
/*STORY SCRIPT*/


var conversations = [
    {
        "numofchars": 0,
        "activespeaker": "",
        "hexcolor": "#5A5475",
        "speaker": "",
        "conline": "That's true.",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "If you’re going back and forth between your words like that, then I won’t be able to understand what you mean. Throw me a bone here, Natsume-kun.",
        "char2tag": "T13",
        "char1tag": "N2",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "If you don’t care about me, then I’ll accept it.",
        "char2tag": "T16",
        "char1tag": "N2",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "The ugly parts of Natsume-kun, and the sweetened, ripe bits within... All of it tastes the same to me.",
        "char2tag": "T16",
        "char1tag": "N2",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Any fraction of yourself that you’ll let me have is something I want to treasure.",
        "char2tag": "T1",
        "char1tag": "N2",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "So, please. Tell me honestly if you want me by your side.",
        "char2tag": "T14",
        "char1tag": "N2",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "DoN'T.",
        "char2tag": "T14",
        "char1tag": "N4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Don't say things like that so easiLY. ",
        "char2tag": "T14",
        "char1tag": "N4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(Just a moment ago, he was showing me his sleeping face.)",
        "char2tag": "T14",
        "char1tag": "N5",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(So peacefully resting, like the princes I used to long for from fairy tales that don't exist in this reality.)",
        "char2tag": "T14",
        "char1tag": "N5",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(So how...?)",
        "char2tag": "T14",
        "char1tag": "N5",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(How did his gaze warp into something this intense?)",
        "char2tag": "T14",
        "char1tag": "N1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Ahaha, how cruel.",
        "char2tag": "T2",
        "char1tag": "N1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "But retorting with a non-answer is just like you.",
        "char2tag": "T11",
        "char1tag": "N1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "No one else in the world could ever want for my presence. No one else has ever given me a second chance.",
        "char2tag": "T11",
        "char1tag": "N1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "So forgive me if I find it hard to believe that you truly despise me, after all this time. Even though I'm aware I'm expendable, a part of me still dares to wonder...",
        "char2tag": "T8",
        "char1tag": "N1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Natsume-kun. What am I, to you?",
        "char2tag": "T11",
        "char1tag": "N1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "...Do you really want to know?",
        "char2tag": "T11",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "From the moment we met I was able to see so clearly the misery that would be brought upon yOU. All your heartstrings led only one wAY.",
        "char2tag": "T11",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "A prophet like myseLF...",
        "char2tag": "T11",
        "char1tag": "N9",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "With someone like yOU...",
        "char2tag": "T11",
        "char1tag": "N9",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "What do you think this chemical imbalance will lead TO?",
        "char2tag": "T11",
        "char1tag": "N1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Mm, I don't know. Science is unpredictable.",
        "char2tag": "T2",
        "char1tag": "N1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Gunpowder, when mixed in with different components, can become dangerous enough to kill... but it can also metamorphasize itself into brilliant fireworks, too.",
        "char2tag": "T1",
        "char1tag": "N1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "You may be an alchemist, but I'm not good with this sort of thing at all.",
        "char2tag": "T16",
        "char1tag": "N1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Dangerous enough to kiLL? When Senpai is incapable of even getting angRY? Don't make me lauGH.",
        "char2tag": "T16",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I have gotten angry a few times, you know...?!",
        "char2tag": "T13",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Oh? This is news to ME.",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "And just what sort of situatiON, pray teLL, has had the honour of incurring your wraTH?",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "For example, when students would return books with obvious food stains on the cover...",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Or when they'd crushed a bug and left the aftermath of it between the pages...!",
        "char2tag": "T4",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Is the mere notion of a ruined book enough to keep you tossing and turning at nigHT? ",
        "char2tag": "T4",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "My divination books are priceleSS, of courSE. But I regularly use the books you gift me as stands for my test tubES.",
        "char2tag": "T4",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Ah, so this is what a stroke feels like...!",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Just kiddiNG.  ",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "I'm not so ungrateful that I'd make a mess of my belongings like thAT. Mommy wouldn't be pleasED, besides.",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "But that pathetic look in your eyes is the exact reason I have a hard time believing you would stand your ground over anythiNG.",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Ahaha. I deserve that, admittedly. But, you know.",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "The one and only time I've ever gotten truly angry...",
        "char2tag": "T7",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Close enough to the phantom of it, at least, the way it simmered under my skin...",
        "char2tag": "T7",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Was when I thought you were being hurt for someone else's sake.",
        "char2tag": "T1",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "You of all peopLE, SenPAI... should turn your gaze inwaRD, and look out for yourseLF.",
        "char2tag": "T1",
        "char1tag": "N1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "I don't need your protectiON.",
        "char2tag": "T1",
        "char1tag": "N1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Once upon a tiME, I relied on my nii-sans too muCH, and I thought too highly of my capabilitiES. That is why they had to throw themselves in harm's way to protect ME.",
        "char2tag": "T1",
        "char1tag": "N9",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "...And you know how that endED.",
        "char2tag": "T1",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Even if you say that, I can't help if I'm drawn into your orbit.",
        "char2tag": "T14",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I'd be honoured if you let me revolve around someone as wonderful as you.",
        "char2tag": "T16",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Desperation is a good look on yOU, SenPAI.",
        "char2tag": "T16",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "And if I test the extent of what you'll do for me before you breAK? What sort of face will you show me thEN?",
        "char2tag": "T16",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "One of devotion, I hope.",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "If pushed, even someone like me can do the unspeakable. Anything to ease your pain.",
        "char2tag": "T7",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "That's a bold declaratiON, but would you truly go that fAR?",
        "char2tag": "T7",
        "char1tag": "N9",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Would you swear yourself to ME, SenPAI? All of yOU.",
        "char2tag": "T7",
        "char1tag": "N9",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Your heaRT. Your neCK. That loose tongue of youRS.",
        "char2tag": "T7",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Yes, yes. I'll surrender it all to you.",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "That's why, Natsume-kun.",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "If you're the only one in the world who can accept me as I am, then I'll give my everything to you.",
        "bg": "CG5"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "So let's sing and dance like we used to, in the days before we all went to Hell.",
        "bg": "CG5"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I won't let you out of my sight anymore. ",
        "bg": "CG5"
    }
]