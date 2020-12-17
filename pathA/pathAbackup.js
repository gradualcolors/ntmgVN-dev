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
    {   "numofchars": 0,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "[Find a solution now.]",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I’ve said it before, but you really have the potential to thrive in the theatre circle, Natsume-kun...~",
        "char2tag": "T7",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "These “jagged edges” are made of plaster and paint, so they’re ultimately harmless. If anything, I’d like to get out without worsening the damage.",
        "char2tag": "T14",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "But you’ve always had a dramatic flair for handling situations, huh? ♪",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Pipe down and be stiLL.",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "I cannot concentrate with you yammering away in my eAR, SenPAI.",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Even though backstage mishaps like these are relatively common in the industry, you’re really giving this your all...",
        "char2tag": "T5",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Really, I know it isn’t the same if it’s not the three of us, but.",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Maybe this once, you should let go of your pathetic Senpai.",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "I’ll confiscate your words from those traitorous lips of yours mySELF. This is your last warNING.",
        "char2tag": "T13",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "So it is.",
        "char2tag": "T14",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Even now, you won’t give up on me.",
        "char2tag": "T16",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": ".........",
        "char2tag": "T16",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Though, it’s always been that way with you, hasn’t it?",
        "char2tag": "T8",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Even when I’d burned everything I ever had into ash, and watched it float off into the night sky we share together. Even after fine...",
        "char2tag": "T14",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "I’m not doing it for yOU.",
        "char2tag": "T14",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "That fan of yours who fills our mailbox to the brim with letters praising your physiqUE...",
        "char2tag": "T14",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "If Switch were to show up on stage as just Sora and I, we’d never hear the end of IT.",
        "char2tag": "T14",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Wanting to avoid a nuisance isn’t praiseworTHY, so keep it to yourSELF.",
        "char2tag": "T14",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Avoiding your feelings is just like you, Natsume-kun.",
        "char2tag": "T10",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "But I like that about you, too.",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "... You expend too much energy blabbering about the inconsequentiAL.",
        "char2tag": "T2",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "(Saying these things so brazenly...)",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "(Senpai only talks without thinking, and leaves me to pick up the pieces of myself that crack, just a little bit, at that hopeless smile of his.)",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "(But just when...)",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "So be quiet now, and let me help YOU.",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "(When did this become our new normal?)",
        "char2tag": "T2",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Hm.........",
        "char2tag": "T5",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "If I can get my hips through the wall, then gravity should help me through the rest of the way.",
        "char2tag": "T15",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "With enough luck, I won’t land on my face. It’s the only part of myself that I can consider a selling point, especially as an idol~",
        "char2tag": "T1",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "And just what should I be pushing AT, when the only feasible option is...?",
        "char2tag": "T1",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "M-My rear end? Well, this is a precarious situation, and...",
        "char2tag": "T3",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "I’d rather DIE.",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "But you’re the only one here who could help...?!",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Sora-kun is still doing idol work with the other second years, isn’t he? Aah, this is bad...",
        "char2tag": "T15",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I suppose there’s no other choice. We’ll have to do... that.",
        "char2tag": "T10",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Natsume-kun, reach for my phone.",
        "char2tag": "T1",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Oh? Does Senpai have an alternate plan of acTION?",
        "char2tag": "T1",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "For onCE, there’s a sense of resolve in your pathetic toNE. Fine by ME.",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Now, open the Super Fortune Time website, and scroll to the very bottom of the page to find my lucky item of the day...",
        "char2tag": "T7",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "That won’t help at ALL...!",
        "char2tag": "T7",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Forget IT. I'm taking matters into my own hanDS.",
        "char2tag": "T7",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "(Among other things...)",
        "char2tag": "T7",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Uwah... Your change of heart was surprisingly quick!",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Are you sure? If Lady Fortune feels generous today, we might be able to witness a miracle...!",
        "char2tag": "T1",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Once, my mother looked up a ‘Life Hack’ tutorial on how to clean kitchen sinks, and she accidentally created ammonia gas.",
        "char2tag": "T7",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "But, unbeknownst to us, there was an unrelated gas leak somewhere in the back of the house.",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Poison control was called, and they found it and saved us from both.",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "It’s the little things in life. Lucky us~!",
        "char2tag": "T7",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Rather than a stroke of luCK, it just seems to me that your incompetence was an inherited traIT.",
        "char2tag": "T7",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Well, it doesn’t mattER. Go aheAD, tear to pieces the false luck you so reverently worshIP. The only fortune teller you need is ME, so I expect your fideliTY.",
        "char2tag": "T7",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "In a world where shooting stars can coexist with dingy old wells people throw their wishes inTO...",
        "char2tag": "T7",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "If you had a choiCE, wouldn’t you go with that which is more of a wondER?",
        "char2tag": "T7",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "In a roundabout way, is this your attempt at making me feel better...?",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Sora will get lonely without Senpai joining him on the staGE. That’s ALL.",
        "char2tag": "T1",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Do not waste my precious time and enerGY. I expect you to writhe like a worm the second my hands make contact with yOU, do you understaND?",
        "char2tag": "T1",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Natsume-kun...",
        "char2tag": "T3",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "(You’re the only miracle I’ve ever dared to hope for.)",
        "char2tag": "T8",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I understand.",
        "char2tag": "T16",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "On the count of three, then?",
        "char2tag": "T1",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "One.",
        "char2tag": "T1",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Two...!",
        "char2tag": "T2",
        "char1tag": "N1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "ThrEE.",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2, 
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "(.........?!)",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "(Even though he carries the appearance of a disheveled geezer, my hands are surprisingly full-?)",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charC",
        "speaker": "Sora",
        "conline": "HuHu! Shisho! Senpai!",
        "charsingle": "S2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "both",
        "speaker": "Natsume/Tsumugi",
        "conline": ".........?!",
        "char2tag": "T3",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charC",
        "speaker": "Sora",
        "conline": "Oh. Are Shisho’s hands on—",
        "charsingle": "S3",
        "bg": "BG1"
    },
    {
        "numofchar": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "A-Aaahh... Sora-kun, you’re back early. ♪",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "As you can see, we’re in a pinch, but it isn’t what it looks like!",
        "char2tag": "T16",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Stoptalkingstoptalking—",
        "char2tag": "T16",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "See? Natsume-kun is wiping his hands off. He was being helpful and picking lint off my costume...",
        "char2tag": "T7",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charC",
        "speaker": "Sora",
        "conline": "Woah~! The colours between Shisho and Senpai are blinding!",
        "charsingle": "S1",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charC",
        "speaker": "Sora",
        "conline": "Sora understands, HuHu. It must have been frustrating, to the point of exceeding Shisho’s normal distress levels...!",
        "charsingle": "S4",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charC",
        "speaker": "Sora",
        "conline": "But don’t be upset anymore, okay? Sora can help to pick lint off too! Make way~!",
        "charsingle": "S4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I-it’s really okay! Don’t you have to get changed for the live?",
        "char2tag": "T2",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "For onCE, this Mophead is RIGHT. Leave it to your Senpai to handLE.",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Only the magic of a Mastermind can ease Senpai’s sufferING. In essenCE, my hands are the sole key to dismantling his probleMS.",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charC",
        "speaker": "Sora",
        "conline": "Got it! Only Shisho’s hands can touch Senpai’s pants!",
        "charsingle": "S1",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "N—",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 1,
        "activespeaker": "charC",
        "speaker": "Sora",
        "conline": "Then, Sora will head to the changing rooms and do his best~!",
        "charsingle": "S2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Just like that, he’s gone off to prepare...",
        "char2tag": "T15",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Hehe. Sora-kun really is a good kid, isn’t he~?",
        "char2tag": "T7",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "O-Ow!? Natsume-kun!?",
        "char2tag": "T13",
        "char1tag": "N5",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Have you forgotten the situation we’re IN, you MopHEAD...!",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "At this raTE, you'll be taking your last breath in this dark and cramped backstaGE.",
        "char2tag": "T13",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I’ll take responsibility for it, so don’t get mad...?!",
        "char2tag": "T3",
        "char1tag": "N2",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Why are you phrasing it like a marriage proposAL?!",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "That’s not what I meant at all...?!",
        "char2tag": "T8",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I’ll reimburse the costs for this out of pocket, so let’s break apart the plaster around me, okay?",
        "char2tag": "T14",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "UGH. What happened to keeping things in one pieCE, you tactless shaggy mAN?",
        "char2tag": "T14",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I’ll accept ‘shaggy man’, but tactless might be going too far...",
        "char2tag": "T9",
        "char1tag": "N9",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Why is that where you draw the liNE.",
        "char2tag": "T9",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "We don’t want a repeat of... what happened earlier, so I theorise this is the quickest way forward.",
        "char2tag": "T7",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "I’ll offer the contractors double the pay to get things fixed after-hours, even...",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "After all, the Switch that you’ve worked so hard to build up...",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "It’s essentially the same as your heart, pulsing so strongly with the love you’ve imbued into it.",
        "char2tag": "T14",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Even if it takes me more than a lifetime, I’d do anything to keep it intact.",
        "char2tag": "T1",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "You could have said that from the staRT, before we traumatised SoRA.",
        "char2tag": "T1",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Well, whatevER. Your decision has been made, so don’t you dare regret IT.",
        "char2tag": "T1",
        "char1tag": "N4",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "I won’t accept any complaints if you get hurt in the proceSS, understaND? The plaster will fall apart as fate dictates it TO.",
        "char2tag": "T1",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Even if you tell me to be carefUL, I have no say in the mattER.",
        "char2tag": "T1",
        "char1tag": "N8",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "So.........",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Lower your heAD, and be gOOD.",
        "char2tag": "T1",
        "char1tag": "N3",
        "bg": "BG1"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Let’s head towards that stage togethER, Tsumugi nii-sAN. ♪",
        "char2tag": "T1",
        "char1tag": "N7",
        "bg": "BG1"
    },
    {
        "numofchars": 0,
        "activespeaker": "",
        "speaker": "",
        "conline": "",
        "bg": "fade_black"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "SenPAI.",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Ahaha...",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "If you were feeling unwell from your earlier predicameNT, then what good are you on staGE?",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Do I have to tie you to the stake and boil you alive for you to stop overworking yourSELF?",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Even though I’d been trying to hide it... my deepest secrets don’t get past you, huh. ♪",
        "char2tag": "T11",
        "char1tag": "N5",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Wearing your heart on your sleeVE, then having the gall to feign innocence before a seasoned magiciAN...",
        "char2tag": "T11",
        "char1tag": "N9",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "It’s fine, it’s fine...~ I have plenty of time to rest now.",
        "char2tag": "T1",
        "char1tag": "N9",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "In fact, you could praise me a little more for keeping my composure...!",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "Oh? You wish to dIE?",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "So cold...!?",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Could it be, Natsume-kun?",
        "char2tag": "T15",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "That you walked me all the way to my room just to make sure there were no witnesses...?!",
        "char2tag": "T13",
        "char1tag": "N3",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "You overestimate ME, SenPAI.",
        "char2tag": "T13",
        "char1tag": "N6",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "As your leadER, the least I could do to repay your stupid act of rebelliON...",
        "char2tag": "T13",
        "char1tag": "N1",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": ".........",
        "char2tag": "T13",
        "char1tag": "N1",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Natsume-kun?",
        "char2tag": "T5",
        "char1tag": "N1",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Did you get groggy all of a sudden?",
        "char2tag": "T5",
        "char1tag": "N1",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "............ ou............",
        "char2tag": "T5",
        "char1tag": "N4",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Pardon? If you’re murmuring like that, I’ll have to bend down to hear you...",
        "char2tag": "T14",
        "char1tag": "N4",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "conline": "I was sayING—",
        "char2tag": "T14",
        "char1tag": "N8",
        "bg": "BG2"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "conline": "Eek!?",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG2"
    }
    ]