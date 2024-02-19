const score = 200;
// console.log(score);

//Another way to declare a numbers:
const number = new Number(500);
// console.log(typeof number);         // typeof: object
// console.log(number);

// console.log(number.toString());         //To convert number to string
// console.log(number.toString().length);

const newNumber = 100;
// console.log(newNumber.toFixed(3));

const anotherNumber = 123.4567;
// console.log(anotherNumber.toPrecision(2));

const againNumber = 100000;
// console.log(againNumber.toLocaleString("en-IN"));   // If we want a number in indian format


// +++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

// console.log(Math);      // If you want to know more about maths then inspect console.log(Math) in browser.
// console.log(Math.abs(-10));     // Negative to positive
// console.log(Math.round(5.6666));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.78));
// console.log(Math.sqrt(49));


const upperLimit = 50;
const lowerLimit = 0;

const myNum = Math.floor(Math.random() * (upperLimit - lowerLimit) + 1);
console.log(myNum);




