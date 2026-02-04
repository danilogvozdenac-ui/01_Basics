let a = [];

for (let i = 0; i < 7; i++) {
     let randomNumber = Math.floor(Math.random() * 10) + 1;
    a.push(randomNumber);
}

let sum = 0;
for (let i = 0; i < a.length; i++) {
    sum += a[i];
}

console.log("Summe: " + sum);
console.log("Array: " + a);

