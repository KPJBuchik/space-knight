var SpaceKnight = SpaceKnight || {};

SpaceKnight.Event = {};
SpaceKnight.Event.opening = [
    {
        number: "0",
        name: 'opening',
        image: "assets/spaceknight.png",
        text: 'YOU ARE SPACE KNIGHT. GATHER WHATS LEFT OF YOUR ORDER  TO DEFEAT THE DARK EMPEROR. SEARCH THE GALAXY FOR YOUR COMPATRIOTS, YOU WILL NEED THEIR HELP. THE FATE OF THE UNIVERSE IS IN YOUR HANDS.',
        sound: "assets/mysong.m4a",
        spritePosition: [
            152,
            60
        ]


    },

]
SpaceKnight.Event.eventTypes = [

    {
        number: "0",

        name: 'planets',
        image: "assets/planets.svg",
        text: 'One of your former comrades must be in this system. Pick a planet Space Knight, fly right up there in your little space ship',
        sound: "assets/mysong.m4a",
        spritePosition: [
            270,
            400
        ],


    },
    {
        number: "1",

        name: 'Zorbax-9',
        image: "assets/zorbax-5.png",
        text: '...TRAVELING TO ZORBAX-9',
        spritePosition: [
            180,
            40
        ],
        scenario: 'a',
        room_completed: "false"

    },
    {
        number: "2",

        name: 'Bar',
        image: 'assets/bar.png',
        text: 'YOU LAND ON ZORBAX AND HEAD TO THE LOCAL WATERING HOLE TO ASK SOME QUESTIONS...NOT A VERY LIVELY BUNCH, THE BARTENDER TENDS AN EMPTY BAR POLISHING GLASSES WITH HIS EIGHT TENTACLES. HE IS AN OCTOPUS. YOU COULD SEE IF HE HAS SEEN ANYTHING. DEGENERATE TYPES LIKE THIS USUALLY TAKE A LITTLE PALM GREASING THOUGH.                                                                                                 BRIBE',
        spritePosition: [
            -60,
            -100
        ],
        room_completed: false
    },
    {
        number: "3",

        name: 'Bribe',
        image: 'assets/bar.png',
        text: "MAYBE I SAW SOMETHING. IT MIGHT COST YOU THOUGH"
    },
    {
        number: "4",

        name: 'Bribe-Sucess',
        image: 'assets/bar.png',
        stat: 'money',
        value: -3,
        text: "OH YEAH, I SAW A SPACE KNIGHT. BLUE GUY, LOOKED PRETTY DENSE.  RIGHT OVER THERE"
    },
    {
        number: "5",

        name: 'Bribe-Failure',
        image: 'assets/bar.png',
        text: "I TOLD YOU I AINT SEEN NOTHING",
    },
    {
        number: "6",

        name: 'Fight',
        image: 'assets/bar.png',
        text: 'OH YOU WANNA TUSSLE TOUGH GUY'
    },
    {
        number: "7",
        name: 'Fight-Intro',
        image: 'assets/spaceknightbattle.png',
        text: 'YOU HAVE INVOKED THE FURY OF SPACE KNIGHT FOR THE LAST TIME BRIGAND. HAVE AT THEE!',
        spritePosition: [
            152,
            60
        ]

    },
    {
        number: "8",
        name: 'Fight-Sucess',
        image: 'assets/letsgo.png',
        text: 'THE BARTENDER HAS BEEN DEFEATED, GREAT JOB SPACE KNIGHT. YOU PSYCHO PATH.'
    },
    {
        number: "9",

        name: 'Fight-Failure',
        gameStatus: "over",
        text: 'YOU HAVE BEEN DEFEATED BY A BARTENDER, GREAT JOB SPACE KNIGHT. YOU PSYCHO PATH.'
    },
    {   number: "10",
        type: 'Buy Drink',
        money: -2,
        morale: +2,
        text: 'YOU BUY A BEER, IT TASTES A LITTLE FUNKY.'
    },
    {
        number: "11",
        name: "broj",
        text: "WELCOME TO BROJ, A HORRIBLE LITTLE SAND PLANET",
        image: "assets/broj.png",
        spritePosition: [
            180,
            40
        ],
    },
    
    {
        number: "12",
        notification: 'neutral',
        image: "assets/ENEMY.png",
        spritePosition: [
            180,
            40
        ],

    },
    {
        type: 'SHOP',
        notification: 'neutral',
        text: 'Smugglers sell various goods',
        products: [
            { item: 'food', qty: 20, price: 60 },
            { item: 'oxen', qty: 1, price: 300 },
            { item: 'firepower', qty: 2, price: 80 },
            { item: 'crew', qty: 5, price: 60 }
        ]
    },
    {
        type: 'ATTACK',
        notification: 'negative',
        text: 'Bandits are attacking you'
    },
    {
        type: 'ATTACK',
        notification: 'negative',
        text: 'Bandits are attacking you'
    },
    {
        type: 'ATTACK',
        notification: 'negative',
        text: 'Bandits are attacking you'
    }
];



SpaceKnight.Event.generateText = async function (text) {
    document.getElementById("opening-scroll").innerHTML = ""

    waitAfter = 10;
    var n = 0;
    // Following DOM query only done once saving lots of time
    const el = document.getElementById("opening-scroll");

    const wait = () => new Promise(r => setTimeout(r, waitAfter));

    // Preventing re flow overhead by using textContent rather than innerHTML
    const render = () => el.textContent = (text.substring(0, n + 1));

    while (n < text.length) {
        requestAnimationFrame(render);  // Calls existing function
        // thus avoid unneeded function state capture
        // via closure

        await wait();

        n++;                            // add after await so render gets
        // the correct value
    }
}


//     var txt = text
//     i = 0,
//     pad = document.getElementById('opening-scroll'),
//     speed;
//   function typeWriter() {

//     if (i < txt.length) {
//       pad.insertAdjacentText('beforeEnd', txt.charAt(i));
//       i++;
//       setTimeout(typeWriter, speed);
//     }
//   }

//   function write(whatToWrite, howFast) {
//     txt += whatToWrite;
//     speed = howFast;
//     typeWriter();
//   }

//   write(text, 100);








    // var i = 1;
    // var speed = 50;
    // textCrawl = text
    // typeWriter = function () {
    //     if (i < textCrawl.length) {
    //         document.getElementById("opening-scroll").append(textCrawl.charAt(i));
    //         i++;
    //         setTimeout(typeWriter, speed);
    //     }

    // }

