let playerScore = 0;
let computerScore = 0;
let rounds = 1;

let maxDice = prompt("Wähle deine Würfelgröße aus (1-20): ");
maxDice = Number(maxDice);

if (maxDice < 1 || maxDice > 20 || isNaN(maxDice)) {
  console.log("Ungültige Zahl es wird mit 6W gespielt.");
  console.log("-------------------------");
  maxDice = 6;
}

console.log("Du spielst mit einem " + maxDice + "W.");
console.log("-------------------------");

while (rounds <= 5) {
  
prompt("Drücke Enter um zu Würfeln: Runde " + rounds + "/5: ");

let player = Math.floor(Math.random() * 6) + 1;
let computer = Math.floor(Math.random() * 6) + 1;

console.log("Du hast eine " + player + " gewürfelt.");
console.log("Der Computer hat eine " + computer + " gewürfelt.");

if (player > computer) {
  console.log("Du gewinnst!");
  playerScore += player;

} else if (player < computer) {
  console.log("Der Computer gewinnt!");
  computerScore += computer;

} else {
  console.log("Unentschieden!");
  playerScore += player;
  computerScore += computer;  
}

console.log("Du hast " + playerScore + " Punkte und der Computer hat " + computerScore + " Punkte.");
console.log("-------------------------");

rounds++;
}

if (playerScore > computerScore) {
  console.log("Du hast gewonnen!");
}
else if (playerScore < computerScore) {
  console.log("Computer hat gewonnen!");
}
else {
  console.log("Unentschieden!");
}
