let arr = [2, 3, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let average = sum / arr.length;

console.log("Durchschnitt: " + average.toFixed(2));