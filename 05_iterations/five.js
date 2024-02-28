const coding = ["js", "py", "rb", "cpp", "java"];

// For-Each loop with regular function:
coding.forEach( function (item) {
    // console.log(item);
})

// For-Each loop with arrow function:
coding.forEach( (value) => {
    // console.log(value);
})

// Passing function to the For-Each loop as a parameter:
function printMe (item) {
    // console.log(item);
}
coding.forEach(printMe);

// For-Each has many parameters to pass into it:
coding.forEach( (item, index, arr) => {
    // console.log(`item of index ${index} is: ${item} and the entire array is`, arr);
})

const myCoding = [ 
    {
        language: "JavaScript",
        fileName: "js"
    }, 
    {
        language: "Python",
        fileName: "py"
    },  
    {
        language: "Java",
        fileName: "java"
    }
];

myCoding.forEach( (item) => {
    console.log(item.language);
})