let grade = prompt("What is your score? (1-100): ");
let attendance = prompt("What is your attendance? (0-100): ");
let extraCredit = prompt("How much extra Credit do you have? (1-10): ");

if (grade >= 80 && attendance >= 90 || extraCredit >= 5) {
    console.log("Eligible for advanced exam.");
} else {
    console.log("Not eligible for advanced exam.");
}   

