let a = Number(prompt("Gib eine Zahl ein:"));
let b = Number(prompt("Gib eine zweite Zahl ein:"));
let sum = 0;

for (let i = a; i <= b; i++) {
    sum += i;
}

console.log(sum);