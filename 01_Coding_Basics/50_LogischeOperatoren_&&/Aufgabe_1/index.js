let a = prompt("What is your score?: ");

if (a == 90 || a > 90) {
    console.log("Grade A");
}

else if (a >= 80 && a <= 89) {
  console.log("Grade: B");
}

else if (a >= 70 && a <= 79) {
  console.log("Grade: C");
}

else if (a >= 60 && a <= 69) {
  console.log("Grade: D");
}

else {
  console.log("Grade: F");
}

