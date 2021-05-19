
var SpaceKnight = SpaceKnight || {};

SpaceKnight.Game = {};

SpaceKnight.Game.gameOver = false;
SpaceKnight.Game.sequence = 0;

SpaceKnight.input = "";
SpaceKnight.Game.GAME_STARTED = false;
let begin = document.getElementById("begin");
begin.addEventListener("click", function () { (SpaceKnight.Game.init()) });


SpaceKnight.Game.init = function () {
  SpaceKnight.Game.sequence++;
  // audioObj = new Audio("assets/theme.m4a");
  // audioObj.addEventListener("canplaythrough", event => {
  //   event.preventDefault();
  //   /* the audio is now playable; play it if permissions allow */
  //   audioObj.play();
  // });
  console.log(SpaceKnight.Game.sequence)
  //reference ui
  this.ui = SpaceKnight.UI;
  //reference the images
  this.canvas = SpaceKnight.canvas;
  //reference event manager
  this.eventManager = SpaceKnight.Event;
  // SpaceKnight.Event.generateEvent(SpaceKnight.Event.eventTypes[0].image)  
  //  this.canvas.init({
  //   FIRST_FRAME,



  //  })
  //setup ship
  this.ship = SpaceKnight.ShipObject;
  this.ship.init({
    fuel: 10,
    crew: 1,
    hull: 10,
    food: 40,
    oxygen: 2,
    money: 10,
    torpedoes: 2,
    morale: 5,
  });

  //pass references
  this.ship.ui = this.ui;

  this.ui.game = this;
  this.ui.ship = this.ship;

  this.inventory = SpaceKnight.Inventory
  this.inventory.init({

    sword: false,
    ammo: false,
    map: false,
    unsentLetter: false,
    laserGun: false,


  });

  //begin adventure!
  this.startJourney();
  begin.style.display = "none";
  this.ui.refreshStats();


  let form = document.createElement("form");
  form.setAttribute("id", "form");
  let input = document.createElement("input");
  input.autoFocus = "true "
  input.setAttribute("id", "input");
  input.setAttribute("placeholder", ">");
  input.setAttribute("autocomplete", "off")
  document.getElementById("terminal").appendChild(form);
  document.getElementById("form").appendChild(input);

  SpaceKnight.Game.continue();


  console.log(SpaceKnight);

};
SpaceKnight.Game.continue = function () {
  // document.getElementById("opening-scroll").innerHTML = ""

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    SpaceKnight.Game.loop();

  });
};


SpaceKnight.Game.startJourney = function () {
  this.GAME_STARTED = true;
  SpaceKnight.Event.generateText(SpaceKnight.Event.eventTypes[0].text);
  SpaceKnight.Canvas.init(SpaceKnight.Event.eventTypes[0].image, SpaceKnight.Event.eventTypes[0].spritePosition)
  console.log("begin");
};

SpaceKnight.Game.loop = function () {
  this.ui = SpaceKnight.UI;
  this.eventTypes = SpaceKnight.Event.eventTypes;
  this.canvas = SpaceKnight.Canvas;

  this.room_completed = this.eventTypes[1].room_completed
  console.log(SpaceKnight.Game.sequence)
  let input = document.getElementById("input").value;
  let userInput = input.toLowerCase();
  document.getElementById("form").reset();


  if (userInput == "zorbax" && this.eventTypes[1].room_completed == "false") {
    SpaceKnight.Game.sequence++

    SpaceKnight.Event.generateText(SpaceKnight.Event.eventTypes[1].text);
    SpaceKnight.Canvas.images(SpaceKnight.Event.eventTypes[1].image, SpaceKnight.Event.eventTypes[1].spritePosition);
    this.eventTypes[1].room_completed = "true";

    setTimeout(function waitFive() {
      SpaceKnight.Game.sequence++

      SpaceKnight.Event.generateText(SpaceKnight.Event.eventTypes[2].text);
      SpaceKnight.Canvas.images(SpaceKnight.Event.eventTypes[2].image, SpaceKnight.Event.eventTypes[2].spritePosition)
    }, 3000)
  }

  else if (userInput == "fight" && SpaceKnight.Game.sequence >= 3 && SpaceKnight.Inventory.sword == true) {

    SpaceKnight.Event.generateText("OH YEAH? WANNA HAVE A TUSSLE");
    setTimeout(function wait() {

      SpaceKnight.Event.generateText("YOU FACE SPACE KNIGHT! HAVE AT THEE VILLAIN!");
      SpaceKnight.Canvas.images(SpaceKnight.Event.eventTypes[4].image, SpaceKnight.Event.eventTypes[2].spritePosition)

    }, 3000);
document.getElementById("action").addEventListener("click", function (){

  SpaceKnight.Event.generateText("YOU HAVE KILLED THE BARTENDER. GREAT JOB, YOU PSYCHO PATH.");

})
  



  }
  else if (userInput == "fight"  && SpaceKnight.Game.sequence >= 3 && SpaceKnight.Inventory.sword == false) {
      SpaceKnight.Canvas.images(SpaceKnight.Event.eventTypes[7].image,SpaceKnight.Event.eventTypes[7].spritePosition)

      SpaceKnight.Event.generateText("YOU FACE SPACE KNIGHT! HAVE AT THEE VILLAIN!");

    document.getElementById("action").addEventListener("click", function (){
      SpaceKnight.Event.generateText("YOU DIED");
      SpaceKnight.Game.gameOver = true;
      console.log(SpaceKnight.Game.gameOver)

    setTimeout(function wait() {
      SpaceKnight.Game.loop()
    }, 2000)
    })

  }
  else if ((userInput == "bribe" || userInput =="bribe bartender") && SpaceKnight.Game.sequence >= 3 && this.ship.money >= 10) {
    SpaceKnight.Event.generateText("BRIBE SUCCESS");

    this.ship.money -= 10;
    this.ui.refreshStats();


  }
  else if ((userInput == "beer" || userInput == "buy beer") && SpaceKnight.Game.sequence >= 3 && this.ship.money >= 2) {
    SpaceKnight.Event.generateText("You have bought a beer");
    this.ship.money -= 2;
    console.log(this.ship.money)
    this.ui.refreshStats();

  }


  else if (userInput === "bribe" && SpaceKnight.Game.sequence >= 3 && SpaceKnight.ShipObject.money < 10) {
    SpaceKnight.Event.generateText("get outta here");
    setTimeout(function wait() {

      SpaceKnight.Event.generateText(SpaceKnight.Event.eventTypes[2].text);
      SpaceKnight.Canvas.images(SpaceKnight.Event.eventTypes[2].image, SpaceKnight.Event.eventTypes[2].spritePosition)
    }, 3000)

  }

  else if (userInput === "planets") {
    SpaceKnight.Event.generateText("get outta here")
  }

  else if (SpaceKnight.Game.gameOver == true) {
    location.reload();

    setTimeout(function wait() {
      console.log("asdf")
      location.reload();
    }, 4000)

  }



  else {
    SpaceKnight.Event.generateText("YOU CAN'T DO THAT")

  }
  console.log(SpaceKnight.ShipObject.money)

}

// SpaceKnight.Game.planets = function (){
//   let input = document.getElementById("input").value;
//   let userInput = input.toLowerCase();
//   if (userInput == "zorbax") {
//     SpaceKnight.Game.sequence++
//     SpaceKnight.Game.loop();

//     SpaceKnight.Event.generateText(SpaceKnight.Event.eventTypes[1].text);
//     SpaceKnight.Canvas.images(SpaceKnight.Event.eventTypes[1].image, SpaceKnight.Event.eventTypes[1].spritePosition);

//     setTimeout(function waitFive() {
//       SpaceKnight.Game.sequence++

//       SpaceKnight.Event.generateText(SpaceKnight.Event.eventTypes[2].text);
//       SpaceKnight.Canvas.images(SpaceKnight.Event.eventTypes[2].image, SpaceKnight.Event.eventTypes[2].spritePosition)

//     }, 3000)
//   }
  
//   else if (userInput == "broji"){

//   }

//   else if (userInput == "gorbo"){

//   }

//   else if (userInput == "gorbo"){

//   }

// }

// SpaceKnight.Game.planet2 = function () {
//   let input = document.getElementById("input").value;
//   let userInput = input.toLowerCase();
//   document.getElementById("form").reset();
//   if (userInput == "zorbax"){
//     SpaceKnight.Game.sequence++
//     SpaceKnight.Game.loop();
//     SpaceKnight.Event.generateText(SpaceKnight.Event.eventTypes[1].text);
//     SpaceKnight.Canvas.images(SpaceKnight.Event.eventTypes[1].image, SpaceKnight.Event.eventTypes[1].spritePosition);
//     this.eventTypes[1].room_completed = "true";

//     setTimeout(function waitFive() {
//       SpaceKnight.Game.sequence++

//       SpaceKnight.Event.generateText(SpaceKnight.Event.eventTypes[2].text);
//       SpaceKnight.Canvas.images(SpaceKnight.Event.eventTypes[2].image, SpaceKnight.Event.eventTypes[2].spritePosition)
//     }, 3000)
//   }
//   else if (userInput == "broji") {
//     SpaceKnight.Event.generateText("WELCOME TO BROJI")


//   }


// }



SpaceKnight.Game.gameAction = function (image, text, inventory, sound, spritePosition, status,) {
  SpaceKnight.Game.sequence++;

  SpaceKnight.Event.generateText(text);
  SpaceKnight.Canvas.images(image, spritePosition);
  SpaceKnight.ShipObject.init(status);
  SpaceKnight.Inventory.init(inventory);
  SpaceKnight.Game.sound(sound)

}