const myNums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const newNum = myNums.map( (num) => {
    if(num <= 30){
        return num + 1;
    }
    else if(num <= 70){
        return num + 2;
    }
    else{
        return num + 5;
    }
})

// console.log(newNum);

// Using above map method in For-Each Loop:
const newNumber = [];
myNums.forEach( (num) => {
    if (num <= 50){
        let addOne = num + 1;
        return newNumber.push(addOne);
    }
    else{
        let addTwo = num + 2;
        return newNumber.push(addTwo);
    }
})
// console.log(newNumber);

// Chaining:
const myScore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newScore = myScore
                    .map ( (score) => score * 10)
                    .map( (score) => score + 1)
                    .filter( (score) => score >= 30);
console.log(newScore);