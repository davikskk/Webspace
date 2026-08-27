const sons = [
    new Audio("cf/músicas/nmwl.mp3"),
    new Audio("cf/músicas/persona.mp3"),
    new Audio("cf/músicas/heaven.mp3"),
    new Audio("cf/músicas/harvey.mp3"),
    new Audio("cf/músicas/sarah.mp3"),
    new Audio("cf/músicas/ec.mp3"),
    new Audio("cf/músicas/nytl.mp3")
];

const bot = document.getElementById("butao");

let mA = 0;
let lig = false;

function clicou() {

    lig = !lig;

    if (lig) {
        sons[mA].play();
        bot.classList.add("girando");
    } else {
        sons[mA].pause();
        bot.classList.remove("girando");
    }
}

sons.forEach(som => {

    som.addEventListener("ended", () => {

        mA = (mA + 1) % sons.length;

        if (lig) {
            sons[mA].play();
        }

    });

});