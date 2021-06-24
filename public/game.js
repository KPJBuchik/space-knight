
var SpaceKnight = SpaceKnight || {};

SpaceKnight.Game = {};



SpaceKnight.input = "";
SpaceKnight.Game.GAME_STARTED = false;
let begin = document.getElementById("begin");
begin.addEventListener("click", function () { (SpaceKnight.Game.init()) });
this.ui = SpaceKnight.UI;


SpaceKnight.Game.init = function () {
  SpaceKnight.Game.gameOver = false;
  SpaceKnight.Game.sequence = 0;
  SpaceKnight.Game.sequence2 = 0;
  SpaceKnight.Game.computerWin = 0;
  SpaceKnight.Game.readyToPlay = false;

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
  // SpaceKnight.Event.generateEvent(this.eventTypes[0].image)  
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
  this.eventTypes = SpaceKnight.Event.eventTypes

  this.GAME_STARTED = true;
  SpaceKnight.Event.generateText(this.eventTypes[0].text);
  SpaceKnight.Canvas.init(this.eventTypes[0].image, this.eventTypes[0].spritePosition)
  console.log("begin");
};

SpaceKnight.Game.loop = function () {
  this.eventTypes = SpaceKnight.Event.eventTypes

  this.ui = SpaceKnight.UI;
  this.canvas = SpaceKnight.Canvas;

  this.room_completed = this.eventTypes[1].room_completed
  console.log(SpaceKnight.Game.sequence)
  let input = document.getElementById("input").value;
  let userInput = input.toLowerCase();
  document.getElementById("form").reset();


  if (userInput == "zorbax" && this.eventTypes[1].room_completed == "false") {
    SpaceKnight.Game.sequence++

    SpaceKnight.Event.generateText(this.eventTypes[1].text);
    SpaceKnight.Canvas.images(this.eventTypes[1].image, this.eventTypes[1].spritePosition);
    this.eventTypes[1].room_completed = "true";

    setTimeout(function waitFive() {
      this.eventTypes = SpaceKnight.Event.eventTypes

      SpaceKnight.Game.sequence++

      SpaceKnight.Event.generateText(this.eventTypes[2].text);
      SpaceKnight.Canvas.images(this.eventTypes[2].image, this.eventTypes[2].spritePosition)
    }, 3000)
  }

  else if (userInput == "fight" && SpaceKnight.Game.sequence >= 3 && SpaceKnight.Inventory.sword == true) {

    SpaceKnight.Event.generateText("OH YEAH? WANNA HAVE A TUSSLE");
    setTimeout(function wait() {

      SpaceKnight.Event.generateText("YOU FACE SPACE KNIGHT! HAVE AT THEE VILLAIN!");
      SpaceKnight.Canvas.images(this.eventTypes[7].image, this.eventTypes[7].spritePosition)

    }, 3000);
    document.getElementById("form").addEventListener("submit", function (event) {
      event.preventDefault();
      SpaceKnight.Event.generateText("YOU HAVE KILLED THE BARTENDER. GREAT JOB, YOU PSYCHO PATH.");





    })
  }
  else if (userInput == "talk" && SpaceKnight.Game.sequence >= 3) {
    SpaceKnight.Event.generateText("I CAN HELP YOU BUT YOU HAVE TO PLAY ME ROCK PAPER SCISSORS. GET READY. ");
    setTimeout(function wait() {

      SpaceKnight.Event.generateText("ROCK PAPER SCISSORS SHOOT");
      SpaceKnight.Game.readyToPlay = true;
    }, 2000);


  }
  else if ((userInput == "rock" || userInput == "paper" || userInput == "scissors") && SpaceKnight.Game.readyToPlay == true) {
    var userChoice = userInput
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    SpaceKnight.Event.generateText(computerChoice);
    setTimeout(function waitFive() {
      var compare = function (choice1, choice2) {
        if (choice1 === choice2) {
          SpaceKnight.Event.generateText("The result is a tie!");
          setTimeout(function wait() {

            SpaceKnight.Event.generateText("ROCK PAPER SCISSORS SHOOT");
            SpaceKnight.Game.readyToPlay = true;
          }, 2000);

        }
        else if (choice1 === "rock") {
          if (choice2 === "scissors") {
            SpaceKnight.Event.generateText("rock wins");
          }
          else if (choice2 === "paper") {
            SpaceKnight.Event.generateText("paper wins");
            SpaceKnight.Game.computerWin++;

          }
        }
        else if (choice1 === "paper") {
          if (choice2 === "scissors") {
            SpaceKnight.Event.generateText("scissors win");
            SpaceKnight.Game.computerWin++;


          }
          else if (choice2 === "rock") {
            SpaceKnight.Event.generateText("paper wins");
          }
        }
        else if (choice1 === "scissors") {
          if (choice2 === "paper") {
            SpaceKnight.Event.generateText("scissors win");
          }
          else if (choice2 === "rock") {

            SpaceKnight.Event.generateText("rock wins");
            SpaceKnight.Game.computerWin++;

          }
        }

      }
      compare(userChoice, computerChoice)
    }, 1000)

    setTimeout(function waitFive() {
      if (SpaceKnight.Game.computerWin > 0) {
        SpaceKnight.Event.generateText("AHHH, THATS TOO BAD.");

      }
      if (SpaceKnight.Game.computerWin < 1) {
        SpaceKnight.Event.generateText(this.eventTypes[4].text)
      }


    }, 2000)
  }

  if (userInput == "fight" && SpaceKnight.Game.sequence >= 3 && SpaceKnight.Inventory.sword == false) {
    SpaceKnight.Canvas.images(this.eventTypes[7].image, this.eventTypes[7].spritePosition)

    SpaceKnight.Event.generateText("YOU FACE SPACE KNIGHT! HAVE AT THEE VILLAIN!");

    document.getElementById("action").addEventListener("click", function () {
      SpaceKnight.Event.generateText("YOU DIED");
      SpaceKnight.Game.gameOver = true;
      console.log(SpaceKnight.Game.gameOver);

      setTimeout(function wait() {
        SpaceKnight.Game.loop()
      }, 2000)
    })

  }
  else if ((userInput == "bribe" || userInput == "bribe bartender") && SpaceKnight.Game.sequence >= 3 && this.ship.money >= 10) {
    SpaceKnight.Event.generateText("BRIBE SUCCESS");

    this.ship.money -= 10;
    this.ui.refreshStats();


  }
  else if ((userInput == "beer" || userInput == "buy beer") && SpaceKnight.Game.sequence >= 3 && this.ship.money >= 2) {
    SpaceKnight.Event.generateText("You have bought a beer");
    this.ship.money -= 2;
    this.ui.refreshStats();
  }

  else if (userInput === "bribe" && SpaceKnight.Game.sequence >= 3 && SpaceKnight.ShipObject.money < 10) {
    SpaceKnight.Event.generateText("get outta here");
    setTimeout(function wait() {
      SpaceKnight.Event.generateText(this.eventTypes[2].text);
      SpaceKnight.Canvas.images(this.eventTypes[2].image, this.eventTypes[2].spritePosition)
    }, 3000)

  }

  else if (userInput === "planets") {
    SpaceKnight.Event.generateText(this.eventTypes[0].text);
    SpaceKnight.Canvas.init(this.eventTypes[0].image, this.eventTypes[0].spritePosition)
  }

  else if (SpaceKnight.Game.gameOver == true) {
    SpaceKnight.Event.generateText("GAME OVER")
    setTimeout(function wait() {
      SpaceKnight.Game.init();
      location.reload();
    }, 2000);

  }


  //planet 2
  else if (userInput == "broj" && SpaceKnight.Game.sequence2 < 1) {

    SpaceKnight.Game.sequence2++;
    SpaceKnight.Canvas.images(this.eventTypes[11].image, this.eventTypes[11].spritePosition)
    SpaceKnight.Event.generateText("...TRAVELING TO BROJ");
    setTimeout(function wait() {
      SpaceKnight.Event.generateText("UH OH, AN ENEMY SPACESHIP HAS INTERCEPTED YOU ON THE WAY TO BROJ.");
      SpaceKnight.Canvas.images(SpaceKnight.Event.eventTypes[12].image, SpaceKnight.Event.eventTypes[12].spritePosition);
      SpaceKnight.ShipObject.hull -= 1;
      this.ui.refreshStats();
      document.getElementById("action").addEventListener("click", function () {
        SpaceKnight.ShipObject.torpedoes -= 1;
     
        SpaceKnight.UI.refreshStats();
        let enemyHealth = 5;
        let enemyMove = Math.floor(Math.random() * 10)
        if (enemyMove > SpaceKnight.ShipObject.hull){
          SpaceKnight.ShipObject.hull -= 1;
          SpaceKnight.UI.refreshStats();

        }
        else {
          enemyHealth-= 1
          SpaceKnight.UI.refreshStats();
          
        }
        console.log("health"+enemyHealth)
        console.log("move" + enemyMove)

      })
    }, 1000);



  }
  else if (userInput == "talk" && SpaceKnight.Game.sequence2 >= 1) {

    SpaceKnight.Event.generateText("second broji text");

  }


  else {
    SpaceKnight.Event.generateText("YOU CAN'T DO THAT")

  }
  console.log(SpaceKnight.ShipObject.money)

}


// SpaceKnight.Game.planet2 = function () {
//   let input = document.getElementById("input").value;
//   let userInput = input.toLowerCase();
//   document.getElementById("form").reset();
//   if (userInput == "talk") {
//     SpaceKnight.Event.generateText("second broji text");


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

SpaceKnight.Game.gameAction = function (object) {
  SpaceKnight.Game.sequence++;

  SpaceKnight.Event.generateText(object[0]);
  SpaceKnight.Canvas.images(object[1], object[2]);
  SpaceKnight.ShipObject.init(status);
  SpaceKnight.Inventory.init(inventory);
  SpaceKnight.Game.sound(sound)

}