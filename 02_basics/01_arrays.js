// Arrays

const myArr = [1, 2, 3, 4, 5];
const myBikes = ["pulsar150", "dominar250", "ns200"];
// console.log(`My dream dike is ${myBikes[2]}`);
// console.log(`My dream dike is ${myBikes[myBikes.length-1]}`);

//Another way to declare an Array:
const newArr = new Array(10, 20, 30, 40);
// console.log(newArr[1]);

// Array methods:
// myBikes.push("MT-15")
// console.log(myBikes);
// console.log(myBikes.pop());
// console.log(myBikes);
// myBikes.unshift("BMW-S-1000");
// console.log(myBikes);
// console.log(myBikes.shift());
// console.log(myBikes);
// console.log(myBikes.includes("R-15"));
// console.log(myBikes.indexOf("dominar250"));

const myNewArr = [10, 20, 30, 40, 50];
console.log("A", myNewArr);

const myNewArr1 = myNewArr.slice(1,3);
console.log(myNewArr1);

console.log("B", myNewArr);

const myNewArr2 = myNewArr.splice(1,3);
console.log(myNewArr2);

console.log("C", myNewArr);