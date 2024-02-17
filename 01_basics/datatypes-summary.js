// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const  score = 100;
const scoreValue = 100.5    //Both are number datatypes

const isLoggedIn = false;
const temp = null;      // Datatypes: Object
let userEmail;

const id = Symbol('abc');
const anotherId = Symbol('abc');
console.log(id === anotherId);

const bigNumber = 112233445566778899n   // datatypes: BigInt 

// Reference types(Non-Primitive)

// Array, Objects, Functions

const bikes = ["pulsarNS", "Dominar", "Mt-15"];     // Datatypes: Object

const myObj = {
    name: "Raashid",
    age: 20
}

const myFunction = function(){
    console.log("Hello World!")     // datatype: Function
}
console.log(typeof bigNumber);

// ****************************** Memory craetion in JS ***************************
// Stack (primitive) and Heap (Non-Primitive)

const myName = "Mohammed";
let myLastName = myName;

myLastName = "Raashid";
console.log(myName);
console.log(myLastName);

let userOne = {
    email: "user123@gmail.com",
    id: 12345
}

let userTwo = userOne;
userTwo.id = 112233;

console.log(userOne.id);
console.log(userTwo.id);