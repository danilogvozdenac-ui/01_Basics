let a = prompt("Geben Sie die erste Zahl ein: ");
let b = prompt("Geben Sie die zweite Zahl ein: ");

let c = prompt("Geben Sie eine Rechenart ein +, -, *, /: ");

if (c == "+") {
    console.log("Das Ergebnis ist: " + (Number(a) + Number(b)));
}

if (c == "-") {
    console.log("Das Ergebnis ist: " + (Number(a) - Number(b)));
}

if (c == "*") {
    console.log("Das Ergebnis ist: " + (Number(a) * Number(b)));
}

if (c == "/") {
    console.log("Das Ergebnis ist: " + (Number(a) / Number(b)));
}

