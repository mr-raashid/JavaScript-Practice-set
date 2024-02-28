// For-of Loop:

const myArr = [10, 20, 30, 40, 50];

for (const arr of myArr) {
    // console.log(arr);
}

const greetings = "Hello World!";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps:

const myCreation = new Map();
myCreation.set('IN', "India");
myCreation.set('Fr', "France");
myCreation.set('UK', "United Kingdom");

// console.log(myCreation);

for (const [key, value] of myCreation) {
    // console.log(key, ":- ", value);
}

const myObj = {
    game1: "NFS",
    game2: "GTA"
}

for (const [key, values] of myObj) {
    // console.log(key, ":- ", value);  // myObj is not iterable..
}