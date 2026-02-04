let count = Number(prompt("Wie viele Zahlen möchten Sie eingeben?:"));
let sum = 0;

for (let i = 1; i <= count; i++) {
    let number = Number(prompt("Geben Sie Zahl " + i + " ein:"));
    sum += number;
}

let average = sum/count;
console.log("Der Durchschnitt der eingegebenen Zahlen ist: " + average);

// Number(prompt("Wie viele Zahlen möchten Sie eingeben?:")) das Number bedeutet das die Eingbe des Users in eine Zahl umgewandelt
// wird