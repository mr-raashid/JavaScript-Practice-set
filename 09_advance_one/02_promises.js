// 01
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task is completed");
        resolve();
        }, 2000);
});

promiseOne.then(function(){
    console.log("Promise resolved");
})

// 02 - promiseTwo
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2 is completed");
        resolve();
    }, 3000)
}).then(function () {
    console.log("Promise 2 resolved");
})

// 03
const promiseThree = new Promise(function (resolve, reject){
    setTimeout(() => {
        resolve({username: "Rash", email: "rash@myown.com"})
    }, 3500)
});
promiseThree.then(function(user){
    console.log(user);
})

// 04
const promiseFour = new Promise(function (resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Rashu", password: "123"})
        }
        else{
            reject("ERROR : Something went wrong");
        }
    }, 4000)
})
promiseFour.then((user) => {
    console.log(user.password);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolve or rejected"));

// 05
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "javascript", password: 2345})
        }
        else{
            reject("JS file went wrong");
        }
    }, 5000)
});
async function consumePromiseFive () {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();