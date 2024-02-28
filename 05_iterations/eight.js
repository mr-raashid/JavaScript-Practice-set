// Reduce Method:

const myNum = [1, 2, 3, 4, 5];

const myTotal = myNum.reduce( function (accumulator, currentValue) {
    // console.log(`accumulator: ${accumulator} and current value: ${currentValue}`);
    return accumulator + currentValue;
}, 0);

// console.log(myTotal);

// Using Arrow function:

const myNum1 = [1, 2, 3, 4];

const myTotal1 = myNum1.reduce( (accumulator, currentValue) => accumulator + currentValue , 0);
// console.log(myTotal1);

const myShoppingCart = [
    {
        courseName: "Web-developer",
        price: 1999
    },
    {
        courseName: "React.js",
        price: 2999
    },
    {
        courseName: "Java",
        price: 999
    },
    {
        courseName: "Python",
        price: 3999
    },
    {
        courseName: "Mobile developer",
        price: 5999
    }
];

const totalAmount = myShoppingCart.reduce ( (accumulator, item) => accumulator + item.price, 0);

console.log(totalAmount);