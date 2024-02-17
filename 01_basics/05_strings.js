const name = "Raashid";
const bikeCounts = 5;
// console.log(name[1]);

// console.log(name + " have " + bikeCounts + " bikes in his garage.");

// String Interpolations:
// console.log(`Hello my name is ${name} and i have ${bikeCounts} bikes in my garage..`);

// Another way to declare a string:
const myName = new String("Mohammed");
// console.log(myName);
// console.log(typeof myName);     // typeof: object

// console.log(myName.length);
// console.log(myName.__proto__);
// console.log(myName.toLocaleUpperCase());
// console.log(myName.toLocaleLowerCase());
// console.log(myName.charAt(4));

// console.log(myName.indexOf("d"));
// console.log(myName.substring(0,4));
// console.log(myName.slice(-6, 6));

const newString = "Mohammed        ";
console.log(newString.trim());

const anotherString = "Mohammed-Raashid-MR"
console.log(anotherString.replace("Raashid", "Raiyan"));

console.log(anotherString.includes("Riza"));
console.log(anotherString.split("-"));
