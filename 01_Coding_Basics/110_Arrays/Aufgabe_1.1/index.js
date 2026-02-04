let a = [4,1,2,3];

let sum = 0;

a.push(17);
a.push(199);

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    sum = sum + a[i];
}

console.log("Summe: " + sum);   

let average = sum / a.length;

console.log("Durchschnitt: " + average.toFixed(2));