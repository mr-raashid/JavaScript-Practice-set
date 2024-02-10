//Conversion from String,Boolean,Null,Undefined to Number;

let score = "100";

//How to know the typeof??
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// Example1
let example1 = "100abc";

let valueInNumber1 = Number(example1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);    //output: NaN

//Example2
let example2 = null;

let valueInNumber2 = Number(example2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);    //output: 0

//Example3
let example3 = undefined;

let valueInNumber3 = Number(example3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);    //output: NaN

//Example4
let example4 = true;

let valueInNumber4 = Number(example4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);    //output: 1

//Example5
let example5 = "Raashid";

let valueInNumber5 = Number(example5);
console.log(typeof valueInNumber5);
console.log(valueInNumber5);    //output: NaN

// Conversions
// "100" => 100
// "100abc" => NaN
// null => 0
// undefined => NaN
// true => 1 / false => 0
// "Raashid" => NaN

//Converion from String,Number,Null,Undefined to Boolean

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);