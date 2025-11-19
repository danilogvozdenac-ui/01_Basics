let age = prompt("Gib dein Alter ein: ");
let money = prompt("Gib dein Geldbetrag ein: €");

if (age >= 18 && money >= 12) {
    console.log("Ticket purchased.");
} else if (age >= 18 && money < 12) {
    console.log("Not enough money.");
} else {
    console.log("You are not old enough to buy a ticket.");
}