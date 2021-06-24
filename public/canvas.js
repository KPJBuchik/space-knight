

var SpaceKnight = SpaceKnight || {};

SpaceKnight.Canvas = {};

SpaceKnight.Context = {};


SpaceKnight.Canvas.init = function (fileName, spritePosition) {
    let canvas = document.createElement('canvas');
    canvas.setAttribute("id","canvas-html");
    canvas.setAttribute("width","640");
    canvas.setAttribute("height","480");
    document.getElementById("append-here").appendChild(canvas);
    
    const context = canvas.getContext('2d');

    let img = new Image();        
    let image2= new Image();
    let spaceKnightHealth = new Image();
    image2.src = "assets/spaceship.png";
    spaceKnightHealth.src = "assets/spaceknightstatus.png";

    
    img.src = fileName;
    img.onload = () => { 
    context.fillStyle = "#222;";
    context.fillRect(800, 800, 800, 800);
    context.drawImage(img, 0, 120);

    context.drawImage(image2, spritePosition[0], spritePosition[1]);

    context.drawImage(spaceKnightHealth, 500, 400);
};


}


SpaceKnight.Canvas.images = function(fileName,spritePosition){

    let canvas = document.createElement('canvas');
    canvas.setAttribute("id","canvas-html");
    canvas.setAttribute("width","640");
    canvas.setAttribute("height","480");
    
    document.getElementById("append-here").appendChild(canvas);
    
    const context = canvas.getContext('2d');

    let img = new Image();    
    let spaceKnightHealth = new Image();
    spaceKnightHealth.src = "assets/spaceknightstatus.png"

    img.src = fileName;
    img.onload = () => { 
    context.fillStyle = "#0F1E26;";
    context.fillRect(800, 800, 800, 800)
    context.drawImage(img, spritePosition[0], spritePosition[1])
    context.drawImage(spaceKnightHealth, 500, 400)


    }

}
SpaceKnight.Context.init = function () {
    this.canvas = null;
    this.context = null;
    this.create = function (canvasTagId) {
        this.canvas = document.getElementById(canvasTagId);
        this.context = this.canvas.getContext('2d');
        return this.context;

    }

}

// let Context = function () {
//     this.canvas = null;
//     this.context = null;
//     this.create = function (canvasTagId) {
//         this.canvas = document.getElementById(canvasTagId);
//         this.context = this.canvas.getContext('2d');
//         return this.context;

//     }
// }
// let cntxt = new Context()

// let Sprite = function (filename, isPattern) {
//     //construct object
//     this.image = null;
//     this.pattern = null;
//     this.toRadians = Math.PI / 180;

//     if (filename) {

//         this.image = new Image();
//         this.image.src = filename;

//         if (isPattern) {
//             this.pattern = cntxt.context.createPattern(this.image, 'repeat')
//         }
//         else
//             console.log("uh oh, sprite not found");
//         this.draw = function (x, y, w, h) {
//             //is a pattern?

//             if (this.pattern) {
//                 cntxt.context.fillStyle = this.pattern;
//                 cntxt.context.fillRect(x, y, w, h);
//             }
//             else {
//                 //image
//                 if (!w) {
//                     cntxt.context.drawImage(this.image, x, y, this.image.width, this.image.height)
//                 }
//                 else {
//                     //stretch tile
//                     cntxt.context.drawImage(this.image, x, y, w, h)
//                 }

//             }
//         };
//         this.rotate = function (x, y, angle) {
//             cntxt.context.save();
//             cntxt.context.translate(x, y);
//             cntxt.context.rotate(angle * this.toRadians);
//             cntxt.context.drawImage(this.image,
//                 -(this.image.width / 2),
//                 -(this.image.height / 2));
//             cntxt.context.restore()
//         };

//     }

// };



// window.onload = (event) => {
//     SpaceKnight.Canvas.init()

// }
// SpaceKnight.Canvas.init = function () {
//     console.log(SpaceKnight.Game.GAME_STARTED)



//     let spaceKnight = "assets/spaceknight.png";

//     let image = new Sprite(spaceKnight, false);

//     cntxt.create("canvas");
//     if (SpaceKnight.Game.GAME_STARTED == false) {
//         image = new Sprite(spaceKnight, false);
//     }
//     else {
//         image = new Sprite(planets, false);

//     }

//     setInterval(function () {

//         cntxt.context.fillStyle = "#222;";
//         cntxt.context.fillRect(800, 800, 800, 800)

//         image.draw(152, 80, 0, 0);


//     }, 50);








//     // cntxt.context.beginPath();
//     // cntxt.context.rect(0, 0, 640, 480)
//     // cntxt.context.fillStyle = 'black';
//     // cntxt.context.fill()


// };
// SpaceKnight.Canvas.clear = function () {
//     document.getElementById("canvas").remove()

// }
// SpaceKnight.Canvas.secondFrame = function () {
//     cntxt.create("canvas");

//     g = document.createElement('div');
//     g.setAttribute("id", "canvas")
//     document.body.append(g)
//     let planets = SpaceKnight.Event.eventTypes[0].image
    
//     let image = new Sprite(planets, false);

//         setInterval(function () {

//             cntxt.context.fillStyle = "#222;";
//             cntxt.context.fillRect(800, 800, 800, 800)
//             image.draw(-54, 80, 0, 0);


//         }, 50);






// }