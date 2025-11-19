let banana = "Banane";
let apple = "Apfel";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let bananaWeight = 0.22;
let appleWeight = 0.34;

let bananaPerKilo = 1 / bananaWeight;
let applePerKilo = 1 / appleWeight;

let pricePerApple = applePricePerKilo / applePerKilo;
let pricePerBanana = bananaPricePerKilo / bananaPerKilo;

console.log(`´Es gibt ${applePerKilo.toFixed(2)} Äpfel pro Kilo. Ein Apfel kostet €${pricePerApple.toFixed(2)}.`);
console.log(`Es gibt ${bananaPerKilo.toFixed(2)} Bananen pro Kilo. Eine Banane kostet €${pricePerBanana.toFixed(2)}.`);

console.log("8 Äpfel kosten: €" + (8 * pricePerApple).toFixed(2));
console.log("17 Bananen kosten: €" + (17 * pricePerBanana).toFixed(2));

let tonne = 1000;
let tonneApple = applePricePerKilo * tonne;
let tonneBanana = bananaPricePerKilo * tonne;

console.log(`1 Tonne Äpfel kostet €${tonneApple.toFixed(2)}`);
console.log(`1 Tonne Bananen kostet €${tonneBanana.toFixed(2)}`);