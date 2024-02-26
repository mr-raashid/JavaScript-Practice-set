// 01
function addNumbers (num1, num2) {
    console.log(num1 + num2);
}
// addNumbers(10, 30);

// 02
function addNumbers1 (num1, num2){
    let num3 = num1 + num2;
    return num3;
    // console.log("Hello");    // This line not execute.
}
const result = addNumbers1(10, 5);
// console.log(result);

function addNumbers2 (num1, num2){
    return num1 + num2;
}
const result1 = addNumbers2(11, 22);
// console.log(result1);


function userLoginMessage (userName) {
    return `Welcome to our website ${userName}`
}
// console.log(userLoginMessage("Raashid"));

// If a user not passed any value then we need to check the conditions:

function loginMsg (userName) {
    if(!userName){
        return `Please enter a user-name`;
    }
    return `${userName} just logged in...`;
}
console.log(loginMsg("Rash"));


// Rest Operator & Spread Operator:

function calculateCartPrice (...num1) {
    return num1;
}

console.log(calculateCartPrice(100, 200, 300));

// We can pass an object to a function:

const user = {
    userName: "Raashid",
    id: 1245
}

function handleObject (anyobject) {
    return `id: ${anyobject.id} name: ${anyobject.userName}`
}

// console.log(handleObject(user));

// Another way:
function handleObject1 (anyobject1) {
    return `id: ${anyobject1.id} name: ${anyobject1.userName}`
}
console.log(handleObject1({
    userName: "Raiyan",
    id: 1254
}));

// We can pass an Array to a function:

const myArray = [ 100, 300, 800, 1200]

function handleArray (getArray) {
    return getArray[2];
}
// console.log(handleArray(myArray));
console.log(handleArray([100, 200, 300, 400]));
