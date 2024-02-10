//Conversion from String,Boolean,Null,Undefined to Number;

let score = "100";

//How to know the typeof??
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let example1 = "100abc";

let valueInNumber1 = Number(example1);
console.log(typeof valueInNumber1);
console.log("Output for conversion of 100abc to number is: " + valueInNumber1);

// Conversions
// "100" => 100
// "100abc" => NaN
// null => 0
// undefined => NaN
// true => 1 / false => 0
// "Raashid" => NaN

// Conversion from String,Number,Null,Undefined to Boolean;
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log("Output for conversion of 1 to boolean is: " + booleanIsLoggedIn);


//Conversions
// 1 => true / 0 => false
// "" => false
// "Raashid" => true
// null => false
// undefined => false

// Conversion from Boolean,Number,Null,Undefined to String

let someNumber = undefined;

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

//Conversions
// 50 => 50(string)
// true => true(string)
// false => false(string)
// null => null(string)
// undefined => undefined(string)


