// While and do while Loop:

let i = 0;

while (i <= 10) {
    // console.log(`Value of i is ${i}`);
    i = i + 2;
}

let myArray = ["Pulsar-150", "Dominar-250", "NS-200"];
let j = 0;
while (j < myArray.length) {
    console.log(`My favorite bike is ${myArray[j]}`);
    j++;
}

// do while Loop:

let score = 20;
do {
    console.log(`Score is: ${score}`);
    score++;
    console.log(score);
} while (score <= 15);