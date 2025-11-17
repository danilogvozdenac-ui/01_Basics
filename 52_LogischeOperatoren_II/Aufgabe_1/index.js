let temperature = prompt("Gib die Temperatur in °C ein:");
let humidity = prompt("Gib die Luftfeuchtigkeit in % ein:");

if (temperature >= 20 && temperature <= 25 && humidity >= 60) {
    console.log("Perfect day for outdoor activities!");
} else {
    console.log("Maybe stay indoors today.");
}