const sons = [
    new Audio("músicas/nmwl.mp3"),
    new Audio("músicas/persona.mp3"),
    new Audio("músicas/heaven.mp3"),
    new Audio("músicas/harvey.mp3"),
    new Audio("músicas/sarah.mp3"),
    new Audio("músicas/ec.mp3"),
    new Audio("músicas/nytl.mp3")
];

const bot = document.getElementById("butao");

let mA = 0;
let lig = false;

function clicou(){
  lig = !lig;
  if(lig){
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
    if(lig){
      sons[mA].play();
    }
  });
});