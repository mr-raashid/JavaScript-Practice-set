const email = "";

if(email){
    console.log("You are logged In");
}
else{
    console.log("Enter a valid email");
}
// <, >, <=, >=, ==, !=, ===, !==

// falsy values:

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

/* Other than falsy values all values are truthy but you
    need to know some of the surprising values.
*/

// "0", "false", " ", [], {}, function(){}

// How to check whether the array is empty:
const myArr = [];
if (myArr.length === 0){
    console.log("Array is empty");
}

// How to check whether the object is empty:
const myObj = {};
if (Object.keys(myObj).length === 0){
    console.log("Object is empty");
}

// Nullish coalescing operator (??): null/undefined
let val1;
val1 = 5 ?? 10;
let val2;
val2 = null ?? 20;
let val3;
val3 = undefined ?? 30;

let val4 = null ?? undefined ?? 40

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);

// Ternary Operator:
const teaPrice = 50;
teaPrice <= 20 ? console.log(`Reasonable Price`) : console.log(`Price is too much`);;