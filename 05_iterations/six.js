// To know more about for each:

const coding = ["js", "py", "rb", "cpp", "java"];

// We can't hold values in For-Each Loop like this:
const newArr = coding.forEach( (item) => {;
    return item;
})
// console.log(newArr);

// If need to store the values in variable you can follow below steps:
const newArr1 = [];
coding.forEach( (item) => {
    newArr1.push(item)
})
// console.log(newArr1);

// Filter:
// With return Keyword:
const myNums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const newNums = myNums.filter( (nums) => {
    return nums > 50;
})
// console.log(newNums);

// Without return keyword:
const newNums1 = myNums.filter( nums => nums > 20);
// console.log(newNums1);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const myBooks = books.filter( (book) => book.genre === "History");
//   console.log(myBooks);

const myBooks1 = books.filter( (book) => {
    return book.edition >= 1995 && book.genre === "Science"
})
console.log(myBooks1);