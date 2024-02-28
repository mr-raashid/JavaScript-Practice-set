const myObject = {
    js: "JavaScript",
    py: "Python",
    java: "Java",
    rb: "Ruby",
    cpp: "C++"
}

for (const key in myObject) {
    // console.log(`${key} stands for ${myObject[key]}`);
}

const myArr = ["js", "py", "rb", "cpp"];

for (const key in myArr) {
    // console.log(key);
    // console.log(`${key}: ${myArr[key]}`);
}

// We can't use for-in loop for map:
const myCreation = new Map();
myCreation.set('IN', "India");
myCreation.set('Fr', "France");
myCreation.set('UK', "United Kingdom");

for (const key in myCreation) {
    // console.log(key);
}