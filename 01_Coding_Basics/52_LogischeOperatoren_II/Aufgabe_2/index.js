let speed = prompt("Gib die Geschwindigkeit in km/h ein: ");
let trafficLevel = prompt("Gib eine Nummer ein von 1-10: ");

if (speed > 80 || trafficLevel > 7) {
    console.log("Slow down!");
} else {
    console.log("You are good to go.");
}