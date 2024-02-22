// Objects can be declared in many ways:
// 1. Object literals
// 2. Singleton
// 3. Object.create

// Object literals:
const userData = {
    name: "Rash",
    age: 18,
    email: "rash@google.com",
    isLoggegIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday", "Thursday"]
}

// To access the objects:
// console.log(userData.name);
// console.log(userData["lastLoginDays"]);

const mySym = Symbol("key1")

const userData1 = {
    name: "Raiyu",
    "full name": "Mohammed Raiyan",
    age: 19,
    [mySym]: "myKey1",
    email: "raiyu@amazon.com",
    isLoggegIn: true,
    lastLoginDays: ["Monday", "Thursday"],
}

// console.log(userData1["full name"]);
// console.log(userData1[mySym]);

// If you don't want to changes the values:
userData1.email = "raiyu@infosis.com";
Object.freeze(userData1);
userData1.email = "raiyu@infosys.com"
userData1.age = 22;
// console.log(userData1);


const userData2 = {
    name: "chotu",
    "full name": "Mohammed Riza",
    age: 20,
    email: "rizu@own.com",
}

userData2.greetings = function(){
    console.log("Hello public");
}

userData2.greetingsTwo = function(){
    console.log(`Hello public myself ${this.name}`);
}

console.log(userData2.greetings());
console.log(userData2.greetingsTwo());