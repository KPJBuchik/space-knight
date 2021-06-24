var SpaceKnight = SpaceKnight || {};

window.onload = (event) => {    
    SpaceKnight.Event.generateText(txt)
    SpaceKnight.Canvas.images(SpaceKnight.Event.opening[0].image, SpaceKnight.Event.opening[0].spritePosition)


}
//opening scroll
var txt = "YOU ARE SPACE KNIGHT. GATHER WHATS LEFT OF YOUR ORDER  TO DEFEAT THE DARK EMPEROR. SEARCH THE GALAXY FOR YOUR COMPATRIOTS, YOU WILL NEED THEIR HELP. THE FATE OF THE UNIVERSE IS IN YOUR HANDS."

//opening image



const $el = document.body;


const genRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

// Generate a star <div>

const genStar = () => {

    const star = document.createElement("img");
    star.src = ("assets/stars.png")
    star.classList.add("star");

    // Gen star coordinates relative to $el size
    let x = genRandomNumber(1, $el.offsetWidth);
    let y = genRandomNumber(1, $el.offsetHeight);

    const { style } = star;

    style.left = Math.floor(x) + "px";
    style.top = Math.floor(y) + "px";

    style.setProperty(
        "--star-size",
        genRandomNumber(1, 4) + "px"
    );

    style.setProperty(
        "--twinkle-duration",
        Math.ceil(genRandomNumber(1, 5)) + "s"
    );

    style.setProperty(
        "--twinkle-delay",
        Math.ceil(genRandomNumber(1, 5)) + "s"
    );

    return star;
}

for (let index = 0; index < 25; index++) {
    $el.append(genStar());
}


