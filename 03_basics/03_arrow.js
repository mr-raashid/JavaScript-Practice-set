const user = {
    userName: "Raashid",
    id: 1200,

    welcomeMessage: function (){
        console.log(`Welcome to our website ${this.userName} your id is ${this.id}`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.userName = "Raiyan";
// user.welcomeMessage();

// console.log(this);      // this refers to empty object in node.js

function chai(){
    let userName = "Riza";
    console.log(this.userName); // We can't access this.userName inside the functions.
    console.log(this);
}
// chai();

const chai1 = function () {
    let userName = "Riza";
    console.log(this.userName);
    console.log(this);
}
// chai1();

const chai2 = () => {
    let userName = "Riza";
    console.log(this.userName);
    console.log(this);
}
// chai2();

// Arrow functions:
const addTwo = (num) => {
    return num + 2;
}
// console.log(addTwo(10));

// Implict return:(Method-01)
const addThree = (num) => num + 3;
console.log(addThree(3));

// Method-02:
const addFour = (num) => (num + 4);
console.log(addFour(20));