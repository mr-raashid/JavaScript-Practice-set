//Conversion from String,Boolean,Null,Undefined to Number;

let score = "100";

//How to know the typeof??
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

let example1 = "100abc";

let valueInNumber1 = Number(example1);
// console.log(typeof valueInNumber1);
// console.log("Output for conversion of 100abc to number is: " + valueInNumber1);

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
// console.log(typeof booleanIsLoggedIn);
// console.log("Output for conversion of 1 to boolean is: " + booleanIsLoggedIn);


//Conversions
// 1 => true / 0 => false
// "" => false
// "Raashid" => true
// null => false
// undefined => false

// Conversion from Boolean,Number,Null,Undefined to String

let someNumber = 50;

let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);

//Conversions
// 50 => 50(string)
// true => true(string)
// false => false(string)
// null => null(string)
// undefined => undefined(string)

// ********************************* Operations ***************************************

let value = 5;
let negativeValue = -value;
// console.log(negativeValue);

// console.log(3 + 3);
// console.log(3 - 3);
// console.log(3 * 3);
// console.log(3 / 3);
// console.log(3 ** 3);
// console.log(3 % 2);

let str1 = "hello";
let str2 = " raashid";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);   // output: 12
// console.log(1 + "2");   // output: 12
// console.log("1" + 2 + 2); //output: 122
// console.log(1 + 2 + "2"); //output: 32


//Don't write this type of code its just for understanding
// console.log(+true);     //output: 1
// console.log(+"");       //output: 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 250;
gameCounter++;
console.log(gameCounter);

//Prefix and Postfix
//Prefix:
// ++i

//Postfix:
// i++;