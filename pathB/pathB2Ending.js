

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
var bgs = ["../assets/backgrounds/BG4.png", "../assets/backgrounds/BG7.png"];
/*STORY SCRIPT*/


var conversations = [
        {
        "numofchars": 0,
        "activespeaker": "",
        "hexcolor": "#5A5475",
        "speaker": "",
        "conline": "[Let Natsume pull the string.]",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "If I’m the one saying thIS, then you know the situation is diRE...",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "But aren’t you acting overdramatIC, SenPAI?",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Since the day you were boRN, you were coerced into being Karma’s guinea pIG.",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Brought into the world under circumstances beyond your contrOL, with parents who had no intention of saving themselvES.",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "And now you’re telling me that you haven’t been adequately punishED?",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "That you need to do more for ME?",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Ahaha. If not for someone else’s sake, I don’t know how to live at all.",
        "char2tag": "T8",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "And is that a life worth liviNG, to yOU?",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Natsume-kun... Rather than upset, or angry, you just seem hurt now.",
        "char2tag": "T14",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "But I’m exhausting all the things I have to help you with.",
        "char2tag": "T16",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "These burdens weren’t ever meant to rest on your shoulders.",
        "char2tag": "T16",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "So how can I make it better? How do I lessen the load?",
        "char2tag": "T13",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Why is it always you who has to reach out to your arrogant juniOR? Haven’t you had enouGH?",
        "char2tag": "T13",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Even if it’s unfair, isn’t it okay if I accept it? The way we treat each other.",
        "char2tag": "T9",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Think of it as the villain’s redemption arc. ♪",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "You’ve already long graduated from being a villaIN.",
        "char2tag": "T8",
        "char1tag": "N9",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "No, in the first plaCE... Were you a villain at aLL?",
        "char2tag": "T8",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "You already know the answer to that question, don’t you.",
        "char2tag": "T11",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "The one time I had control over my destiny, I chose to walk down that cruel path, smiling all the while as I burned the things you loved to crisp.",
        "char2tag": "T4",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "In this world, there are people beyond saving.",
        "char2tag": "T4",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "That’s why things like heroes only ever show up in outlandish cartoons.",
        "char2tag": "T6",
        "char1tag": "N2",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Enough of this farCE. I will pull Senpai back towards me with my own two hanDS.",
        "char2tag": "T6",
        "char1tag": "N4",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Ah?! All of a sudden, you’re gripping my wrist so tightly...",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Any more force and it might cut off my blood circulation...?!",
        "char2tag": "T13",
        "char1tag": "N4",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Just keep walkiNG.",
        "char2tag": "T13",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "My brother lost two toes to hypothermia, so our family has some experience with losing one’s body parts, but I’d prefer to avoid losing either hand at all—",
        "char2tag": "T5",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "SenPAI, this is difficult enouGH.",
        "char2tag": "T5",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "You don’t have to worsen the situation by talking about your brothER.",
        "char2tag": "T5",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Sorry...!",
        "char2tag": "T2",
        "char1tag": "N8",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Ugh, reaLLY...",
        "char2tag": "T2",
        "char1tag": "N4",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "You make it seem so eaSY, being honest to a fauLT.",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "I don’t need a red string to tell me what I already know about SenPAI.",
        "char2tag": "T2",
        "char1tag": "N1",
        "bg": "BG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "But mayBE, with thIS...",
        "char2tag": "T2",
        "char1tag": "N1",
        "bg": "BG4"
    },
    {
        "numofchars": 0,
        "bg": "fade_black"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "WeLL? Do you understand nOW?",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Wait, wait, give me a moment...?!",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I might be good in my studies, but book smarts won’t get me very far with you, since I have to read between the lines fairly often, and the lines to begin with are muddled?",
        "char2tag": "T3",
        "char1tag": "N4",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "But, um...",
        "char2tag": "T16",
        "char1tag": "N4",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Did you come all this way to pointedly buy a bouquet, and then shove the arrangement into my arms without a word?",
        "char2tag": "T16",
        "char1tag": "N4",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "You looked pretty proud of yourself for it, so I wanted to savour that memory for a moment.",
        "char2tag": "T16",
        "char1tag": "N4",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Is that all you got out of that interactiON?",
        "char2tag": "T16",
        "char1tag": "N8",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "For all the time you spend in the libraRY, you sure are hopeleSS.",
        "char2tag": "T16",
        "char1tag": "N8",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Going through all the ‘foreshadowing’, to describe it plainly, might help me piece things together. That’s all.",
        "char2tag": "T7",
        "char1tag": "N8",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Well, I also enjoyed when you showed me your embarrassed face after, Natsume-kun...~",
        "char2tag": "T17",
        "char1tag": "N8",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "There are some things in life you don’t have to point oUT.",
        "char2tag": "T17",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "That said, I’ll find a proper vase to house these, so don’t worry. ♪",
        "char2tag": "T1",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "The sweet scent of gerbera is filling the air around me, having bloomed with its own loving hue.",
        "char2tag": "T2",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Isn’t it funny? I never thought that I’d receive flowers in my lifetime, and yet...",
        "char2tag": "T16",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Don’t go around thinking that this is a reward for your blundering of the live toDAY. It’s a separate matter entireLY.",
        "char2tag": "T16",
        "char1tag": "N2",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "The wistful way you say it... makes me think it’s to commemorate a special occasion.",
        "char2tag": "T5",
        "char1tag": "N2",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Until now, I’m still dense when it comes to the inner workings of your heart. That’s my shortcoming as a magician.",
        "char2tag": "T3",
        "char1tag": "N2",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I’m sorry, Natsume-kun.",
        "char2tag": "T14",
        "char1tag": "N2",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "For White Day last yeAR, when you helped out part-time at that plaCE.",
        "char2tag": "T14",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "With your own two hanDS, you arranged your own selection of floweRS... and then presented them to ME, eyes squeezing in that affectionate way of youRS.",
        "char2tag": "T14",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Do you remembER?",
        "char2tag": "T14",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Ahaha, of course. Your silence was so stressful, I thought I was going to die. ♪",
        "char2tag": "T11",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "But you ended up taking them into your hands, telling me something like “I’m not a girl, you know”.",
        "char2tag": "T8",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Naturally, most boys your age wouldn’t be happy receiving flowers for White Day, since teenagers take these things as an attack on their masculinity...",
        "char2tag": "T8",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "But I promise I didn’t have Natsume-chan in mind at all.",
        "char2tag": "T1",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "The feelings I poured into that bouquet, and the sentiment I wanted you to receive... Those were for Natsume-kun’s eyes only.",
        "char2tag": "T1",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Because you’re someone precious to me.",
        "char2tag": "T11",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "There are other ways to express gratituDE, you knOW.",
        "char2tag": "T11",
        "char1tag": "N1",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Flowers will die quickly if they’re presented freSH. The option to press them between pages is theRE, but seeing them dried and flattened feels wastefUL.",
        "char2tag": "T11",
        "char1tag": "N1",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Humanity is good for one thiNG, after aLL — taking from natuRE, and destroying IT.",
        "char2tag": "T11",
        "char1tag": "N2",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Mm. Should I be more mindful of the repercussions of my gift this year?",
        "char2tag": "T5",
        "char1tag": "N2",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I thought you would’ve been happy.",
        "char2tag": "T5",
        "char1tag": "N2",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "...I didn’t say I wasN’T, SenPAI. Don’t make unfounded assumptioNS.",
        "char2tag": "T5",
        "char1tag": "N6",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Really? I’m glad.",
        "char2tag": "T8",
        "char1tag": "N6",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Even a gift from someone like me can draw out your handsome smile... ♪",
        "char2tag": "T2",
        "char1tag": "N6",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Of courSE, you owe me now for my own act of kindeSS.",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Isn’t it Senpai who always says that bowing your head and giving someone thanks counts as repaymeNT? So where’s youRS?",
        "char2tag": "T2",
        "char1tag": "N3",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Oh, you’re right...! Than—",
        "char2tag": "T3",
        "char1tag": "N3",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Don’t interruPT. Because you’re hopeleSS, I’ll spell it out for yOU.",
        "char2tag": "T3",
        "char1tag": "N8",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "I want to see Senpai’s smiLE, tOO.",
        "char2tag": "T3",
        "char1tag": "N7",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Your magical ability may be sAD, but you can grant me that muCH, can’t yOU?",
        "char2tag": "T3",
        "char1tag": "N7",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "That is the repayment I wish for above all elSE.",
        "char2tag": "T3",
        "char1tag": "N7",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Natsume-kun...",
        "char2tag": "T5",
        "char1tag": "N7",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "You’re a smart child, so I’m sure you know that flowers have all sorts of different meanings.",
        "char2tag": "T15",
        "char1tag": "N7",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "These aren’t the snowdrops I thought I’d get from you, so you definitely aren’t wishing for me to go and die.",
        "char2tag": "T15",
        "char1tag": "N7",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "So could it be...",
        "char2tag": "T14",
        "char1tag": "N7",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "That this time, you’re reaching out to me?",
        "char2tag": "T14",
        "char1tag": "N7",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Interpret it how you waNT. Seeing Senpai floundering all this whiLE, not understanding that I have alwaYS...",
        "char2tag": "T14",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Always...?",
        "char2tag": "T1",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Nevermind thAT.",
        "char2tag": "T1",
        "char1tag": "N4",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Close your eyes and let me cast a final speLL.",
        "char2tag": "T1",
        "char1tag": "N4",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "As you wish, Natsume-kun.",
        "char2tag": "T8",
        "char1tag": "N4",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Though, my eyesight is bad enough that having my eyes closed like this is public is disorienting...!",
        "char2tag": "T8",
        "char1tag": "N4",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Step to your rigHT.",
        "char2tag": "T8",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "If you’re taking me somewhere, please be careful...!? I’m prone to bouts of clumsiness, you know?",
        "char2tag": "T2",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "HmPH. I know that more than anyone elSE.",
        "char2tag": "T2",
        "char1tag": "N1",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Something’s changed?",
        "char2tag": "T8",
        "char1tag": "N1",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Ah, I see. ...Metaphorically speaking, of course, since you told me to keep my eyes shut.",
        "char2tag": "T8",
        "char1tag": "N1",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I can tell... that the sunlight behind my eyelids has disappeared.",
        "char2tag": "T8",
        "char1tag": "N1",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "If we’re somewhere dark, we should be on guard. This is a prime spot to get mugged...?",
        "char2tag": "T2",
        "char1tag": "N1",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Stop talking for a momeNT. You’re disrupting my concentratiON, SenPAI.",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "How am I supposed to pull my magic off in these conditioNS?",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Sorry~!",
        "char2tag": "T2",
        "char1tag": "N2",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "......... ♪",
        "char2tag": "T8",
        "char1tag": "N2",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": ".........BettER.",
        "char2tag": "T8",
        "char1tag": "N7",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Now... Lean doWN, yOU.",
        "char2tag": "T8",
        "char1tag": "N6",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Mm. Like this?",
        "char2tag": "T8",
        "char1tag": "N6",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(I... have always been reaching back to you, you know.)",
        "char2tag": "T8",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(How long more will you keep demeaning yourself, Tsumugi nii-san? I really will get angry.)",
        "char2tag": "T8",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(This red string of fate goes two ways, tied to my pinky finger as much as it’s tied to yours.)",
        "char2tag": "T8",
        "char1tag": "N9",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(Have you forgotten even that?)",
        "char2tag": "T8",
        "char1tag": "N8",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(.........)",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(It’s my own fault for taking so long to grow up. But with this, you should understand.)",
        "char2tag": "T8",
        "char1tag": "N4",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(That as much as you’ve been looking out for me, I also...)",
        "char2tag": "T8",
        "char1tag": "N4",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": ".........",
        "char2tag": "T8",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": ".........",
        "char2tag": "T5",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(They’re soft.)",
        "char2tag": "T3",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(Even though he’s usually so rough with me, the way he’s acting now... It’s gentle. Sweet, almost.}",
        "char2tag": "T3",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(Giving me flowers, and bringing me into an alleyway to kiss me...)",
        "char2tag": "T14",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "(Of course I’ll understand if you give me this much to work with, Natsume-kun.)",
        "char2tag": "T11",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "That was... a promise from you, wasn’t it?",
        "char2tag": "T11",
        "char1tag": "N5",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Close. It’s a vOW.",
        "char2tag": "T11",
        "char1tag": "N7",
        "bg": "BG7"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "An alluring, secret black vow that has been touched by our shared darkneSS.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "You’re an important persON, loved by more people than you thiNK. The moment we met in that Secret ROOM, I could teLL.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "From here on oUT, in all the little moments that will come to lie between US, this is a truth you will be presented wiTH.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "I don’t have to say more for you to understaND, do I?",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Not at all. I hear the author’s intent loud and clear, behind each and every word you’ve dedicated to me.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Even though I’m someone who has committed atrocities, Switch remains a world that will accept me neutrally, blooming under my touch.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "An Emerald Planet full of wonderful things to live for, and precious people who wish for me to walk this path with them.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Living as someone disposable, not realising the whole while that you’ve always wanted me...",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I really am a fool.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "Will you let me stay with you now, as all that I am?",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "If that is your wiSH, then I will grant IT.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Well. It’s not like I don’t want it myseLF, thouGH.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "What I cannot express with worDS, I’ll say with thIS. So let me press my lips to you again and agaIN, until you understand for goOD.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "I’ll always be here to listen, until it finally sinks into this thick skull of mine.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "So don’t run away any more, Natsume-kun.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "There will be times where I’ll forget, and I’ll make you angry. And there will be times where we won’t understand each other at all.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charB",
        "speaker": "Tsumugi",
        "hexcolor": "#5A5475B",
        "conline": "But I’m sure we’ll be okay. You've loved me for this long.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "Don't put words in my mouth if I'm not ready to say thEM, MopheAD.",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(To the world that has scorned me for ages, and to the people who have adored me since I was born... Haven't I come a long way?)",
        "bg": "CG4"
    },
    {
        "numofchars": 2,
        "activespeaker": "charA",
        "speaker": "Natsume",
        "hexcolor": "#E74F52",
        "conline": "(After all, I've found my own happiness now.)",
        "bg": "CG4"
    }
]