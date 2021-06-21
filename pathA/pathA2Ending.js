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
        "conline": "[Words from the mind.]",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "—that I detest the way you can so easily bring me to ruIN, with all the words you thoughtlessly throw my wAY.",
        "char2tag": "T3",
        "char1tag": "N5",
        "bg": "BG2"
    },
        {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "If this is the only form of compensation you dare to ask fOR, then fiNE.",
        "char2tag": "T3",
        "char1tag": "N5",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Ah, I’ve crossed the line...",
        "char2tag": "T16",
        "char1tag": "N5",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Even though I have no self-awareness, I’ll do my best to reflect on my actions.",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "You’re the type of person to bear everything with that wobbly smile of yoURS.",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "If I were to raise my hand against you here and nOW, I wonder if you would take IT.",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "...Tell me, SenPAI. To whom does your fealty belong TO?",
        "char2tag": "T7",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Asking questions that you already know the answers to...",
        "char2tag": "T16",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "You’re funny like that, Natsume-kun. ♪",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "It's because I feel nothing that I let you dig your fingers into my hollow flesh.",
        "char2tag": "T7",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "So long as it elevates the ache that has bloomed so brilliantly from the roots I first planted into your open, writhing chest... then it’s okay, you know.",
        "char2tag": "T7",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Because I’ve ruined someone as wonderful as you.",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I’ve long desecrated the foundation of our intertwining lives, and to atone, my life is yours to use.",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "So don’t go where I can’t follow.",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "That’s the last thing I’d want to hear from yOU.",
        "char2tag": "T8",
        "char1tag": "N2",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Haven’t I gone above and beyond alreaDY, bringing you all the way to your doorstEP?",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "If you’ve been having so many nightmares that they’ve altered your idea of reality this drasticaLLY, I’d be more than happy to knock them out of yOU.",
        "char2tag": "T8",
        "char1tag": "N4",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Natsume-kun, that’s heinously cruel...!",
        "char2tag": "T13",
        "char1tag": "N4",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "May the vision of my face looming over you haunt you in your dreams tonigHT, like a sleep paralysis demon you will never be able to exorciSE.",
        "char2tag": "T13",
        "char1tag": "N4",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Sleep tigHT.",
        "char2tag": "T13",
        "char1tag": "N4",
        "bg": "BG2"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Ah... He left, just like that.",
        "charsingle": "T15",
        "bg": "BG2"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "All in all, we parted on good terms, so I don’t mind it, but...",
        "charsingle": "T9",
        "bg": "BG2"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Somehow, it feels like I’ve spoken only the wrong words today.",
        "charsingle": "T11",
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
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(Mmn...)",
        "charsingle": "T8",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(When did I... doze off?)",
        "charsingle": "T8",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(This is bad. If I don’t get up soon, I’ll have a backlog of emails... and I’d only just managed to clear the last batch in time for Switch’s live.)",
        "charsingle": "T8",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(But the sunlight streaming through the glass is so pleasantly warm.)",
        "charsingle": "T8",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(And the fingers threading through my hair...)",
        "charsingle": "T8",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(.........)",
        "charsingle": "T14",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(The fingers threading through my hair?!)",
        "charsingle": "T3",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "My sleep paralysis demon...?!",
        "charsingle": "T3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "You’re hopelessly stupID, aren’t yOU.",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "N-Natsume-kun...? So it’s just you...",
        "char2tag": "T1",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Well, you look like you’re in a bad mood, so I can’t tell if this is a better outcome.",
        "char2tag": "T12",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Just like thAT, you’ve destroyed the good atmospheRE...",
        "char2tag": "T12",
        "char1tag": "N5",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Self-proclaimed magicians like Houdini should take notes from you on how to make things disappear out of thin aIR.",
        "char2tag": "T12",
        "char1tag": "N5",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I don’t know if that’s a compliment, but I’ll remember these words to my dying day. ♪",
        "char2tag": "T1",
        "char1tag": "N5",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Wait, wait— Don’t recoil your hand so suddenly...?!",
        "char2tag": "T3",
        "char1tag": "N5",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "IdiOT.",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Haven’t I said so befoRE?",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "If you talk about dying so flagrantLY, then there’s no point to everything we’ve worked towarDS, SenPAI.",
        "char2tag": "T3",
        "char1tag": "N9",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "I don't care about yOU, so what ruin you bring upon yourself is none of my conceRN.",
        "char2tag": "T3",
        "char1tag": "N9",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "But if you desecrate your own place in SwitCH, by my siDE, then I can't forgive your transgressioNS.",
        "char2tag": "T3",
        "char1tag": "N2",
        "bg": "BG12"
    },
      {
        "numofchars": 0,
        "activespeaker": "",
        "hexcolor": "#5A5475",
        "speaker": "",
        "conline": "",
        "bg": "BG12",
        branch_flag: true
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Well. Whatever your answer IS, it’s incorreCT. Your self flagellation will never allow for you to understaND.",
        "char2tag": "T3",
        "char1tag": "N2",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "The way I feEL, who you are to ME... These are secrets to be kePT.",
        "char2tag": "T3",
        "char1tag": "N9",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "Knock, knock! Is everyone awake? Sora has arrived...!",
        "charsingle": "S4",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "Along with the toast for Senpai, buttered and served with a side of jam, just as Shisho requested!",
        "charsingle": "S2",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Natsume-kun did?",
        "char2tag": "T5",
        "char1tag": "N9",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": ".....Don’t say another woRD, SenPAI.",
        "char2tag": "T5",
        "char1tag": "N4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I should at least express my gratitude with a polite ‘thank you’. Anything short of that would be bad manners...",
        "char2tag": "T14",
        "char1tag": "N4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "After all... For so long, you’ve both treated this once-caged bluebird so warmly.",
        "char2tag": "T8",
        "char1tag": "N4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Shouldn’t it sing for you in return, just once?",
        "char2tag": "T11",
        "char1tag": "N4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Anyone would nurse an injured animal back to health after seeing it in such a disastrous staTE.",
        "char2tag": "T11",
        "char1tag": "N6",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "But you're not just anyone...",
        "char2tag": "T16",
        "char1tag": "N6",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "It’s a little lonely when Senpai and Shisho whisper-whisper like that... Sora feels left out...!",
        "charsingle": "S3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Sorry, sorry. I have praise for Sora-kun, too.",
        "char2tag": "T1",
        "char1tag": "N6",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Despite your busy schedule, you still take the time to dote on your seniors.",
        "char2tag": "T1",
        "char1tag": "N6",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Truthfully, it makes me feel like I’m already sitting around in a retirement home?",
        "char2tag": "T7",
        "char1tag": "N6",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "The elderly tend to be abandoned by their family past a certain age, and so they’re taken to these homes so they can be cared for properly.",
        "char2tag": "T7",
        "char1tag": "N6",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Once they’re out of sight, their families, whose livelihoods were built on the backs of their elders, can go on guilt-free.",
        "char2tag": "T7",
        "char1tag": "N6",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "To be scorned by not only your family, but society itself... A sentence like that seems fitting for me, but at least Sora-kun’s my hardworking nurse.",
        "char2tag": "T7",
        "char1tag": "N6",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "If you come here, I’ll pat your head and feed you a bite~",
        "char2tag": "T2",
        "char1tag": "N6",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "HuHu... Senpai praises Sora so openly, it makes Sora feel all fuzzy inside...~",
        "char1tag": "T2",
        "char2tag": "S4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "Though the rest of that tangent was depressing?",
        "char1tag": "T2",
        "char2tag": "S3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Every compliment that comes out of Senpai’s mouth is backhandED, naturaLLY.",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "Shisho and Senpai’s colours are melding into one whole pinkish blend. Everyone’s getting along!",
        "char1tag": "T2",
        "char2tag": "S1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "both",
        "speaker": "Tsumugi & Sora",
        "hexcolor": "#5A5475B",
        "hexcolor2": "#6aa84f",
        "conline": "Happy! ♪",
        "char1tag": "T7",
        "char2tag": "S4",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Just eat the toast and wash it down with some tEA. You’re being noisy in the office this early in the morniNG.",
        "char1tag": "N9",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Sora is fiNE, thouGH.",
        "charsingle": "N7",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "Sora got exempted from Shisho's scoldings...~",
        "char1tag": "T7",
        "char2tag": "S1",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "If it’s Natsume-kun asking, of course I’ll behave, but...",
        "char2tag": "T1",
        "char1tag": "N7",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Even if it’s for just a little while longer, I’d like to stay in your lap.",
        "char2tag": "T16",
        "char1tag": "N7",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "You’re getting too bold for your own goOD.",
        "char2tag": "T16",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "But that wasn’t a rejection, was it?",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "It’s warm here, you know, and it’s making me nostalgic for the warm summer days gone by.",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "My hospitality will run dry somedAY. What will this helpless Senpai of mine do thEN, HM?",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Raise your hand against me when that day comes. Everything you'll ever give me; anger, hatred, even love... I'll take it all.",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Lately, though, you haven't been hitting me at all.",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG12"
    },
        {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Not that I can feel pain to begin with, but it seems like Natsume-kun's going through the motions, rather than punishing me.",
        "char2tag": "T8",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Have you been growing softer?",
        "char2tag": "T12",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Some habits have overstayed their welcoME. Even I need to grow UP, from that childiSH, petulant brAT.",
        "char2tag": "T12",
        "char1tag": "N9",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "SenPAI, too, shouldn't put up with inequitable treatmeNT, you knOW?",
        "char2tag": "T12",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Is that what you think? ...Well, I've been getting better at standing my own ground, too. We're both growing by the day.",
        "char2tag": "T5",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Don't get complacent so soON. Your magic is still pathetIC.",
        "char2tag": "T5",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "But there are some things you can do for yourself as you aRE... so, keep living like thIS, with ME.",
        "char2tag": "T5",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "That's a weighty thing to say to someone like me. If you get sick of me, I'll just keep coming back, you know?",
        "char2tag": "T11",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "If I could get sick of yOU, I would have done so by nOW.",
        "char2tag": "T11",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "You're like a roach that doesn't know when to give UP.",
        "char2tag": "T11",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Hehe. Being sturdy is my special skill~! Sora-kun, say aaah.",
        "char2tag": "T7",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "Mm! The sweetness of the jam mixes well with the crisp texture of the bread...! Five stars, five stars... ♪",
        "charsingle": "S1",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "...is what Hina-chan would say if he were here, you know?",
        "charsingle": "S2",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Is that SO? You've gotten better at impersonatioNS.",
        "char2tag": "T7",
        "char1tag": "N7",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "MopheAD. You should find a way to incorporate Sora's talent into our future performancES. Let's harness it properly and watch it grOW.",
        "char2tag": "T7",
        "char1tag": "N4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Manzai-style impersonations don't really work with Switch's theme, though? Maybe if we bring in illusions, to play with our audience a bit...",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Well, I'll figure something out. Magic can make the impossible come true.",
        "char2tag": "T2",
        "char1tag": "N4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Sora has many skiLLS, so I'd like to make him the center more and moRE. Even if Sora wants to bring his friends into Switch temporariLY, I'll allow IT.",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "You've been getting along with them lateLY, after aLL, making food blogs and suCH.",
        "char2tag": "T2",
        "char1tag": "N7",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "Eh?! Shisho's been reading that? Sora's getting embarrassed now...!",
        "charsingle": "S4",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "FuFU. My Sora has become the kind of shy teenager who refuses to share with his parenTS, yES? Daddy is feeling left oUT. ♪",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "If Natsume-kun's the father, then what am I?",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Shut UP, Mommy-SenPAI.",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Ehhh!?",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "Anyway! Tsuka-chan will get into trouble if he's found eating all sorts of sweets and snacks, so Sora hopes the blog will be kept a secret...!",
        "charsingle": "S1",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "But it is true that us second years have been hanging out a lot more, HiHi!",
        "charsingle": "S2",
        "bg": "BG12"
    },
    {
        "numofchars": 1,
        "activespeaker": "charA",
        "speaker": "Sora",
        "hexcolor": "#6aa84f",
        "conline": "See, it was Hime-chan's idea at first, as a secondary project...",
        "charsingle": "S2",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(When was it? The last time the three of us got to sit down together like this, just talking and catching up...)",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(Switch is composed of not just Natsume-kun, but Sora-kun and I as well.)",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(I've always known this.)",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "BG12"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(And yet...)",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "CG2"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(Holding my mother's hand, walking along the streets, as my eyes strayed from her gentle tone to the other children who were so beloved by their parents...)",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "CG2"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(That envy was poison. Choking me, constantly.)",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "CG2"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(It's taken me this long to realise that I've found my own family, that this is what I'd always wanted as a child. Have I treasured our bonds the way I should have?)",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "CG2"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(Is it too late for me?)",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "CG2"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(.........)",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "CG2"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(Natsume-kun's lap is still warm.)",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "CG2"
    },
    {
        "numofchars": 0,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(Forgive me if I doze off again, Sora-kun. Just a little while longer, I want to cling childishly onto this memory.)",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "CG2"
    }
]