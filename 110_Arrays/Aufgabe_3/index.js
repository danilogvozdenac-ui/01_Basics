let arr = [1, 2, 3, 4, 5];
let maximal = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximal) {
        maximal = arr[i];
    }
}

console.log("Das Maximum ist: " + maximal);