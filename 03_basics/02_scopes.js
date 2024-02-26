
if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}
// console.log(a);      // output: 10
// console.log(b);      // b is not defined
// console.log(c);      // c is not defined

// Scopes in detail:
function one () {
    const userName = "Raashid";
    function two () {
        const course = "Learning React";
        console.log(userName + " "+ course);
    }
    two();
}
//one();

if(true){
    const name = "Raashid";
    if(name === "Raashid"){
        const coursePending = 60;
        console.log(name + " has pending course " + coursePending + "%");
    }
}

// ++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++

console.log(addOne(10));
function addOne (num) {
    return num + 1;
}

// Functional expression:
console.log(addTwo(20));    // Cannot access "addTwo" before initialization..
const addTwo = function (num){
    return num + 2;
}