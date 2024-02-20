// Dates

const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(typeof myDate);     // typeof: object

const myCreatedDate = new Date(1999, 3, 29, 4, 30);
// console.log(myCreatedDate.toLocaleString());

const myCreatedDate1 = new Date("04-29-1999");
// console.log(myCreatedDate1.toLocaleString());

const myCreatedDate2 = Date();
// console.log(myCreatedDate2);
// console.log(typeof myCreatedDate2);     // typeof: string

const myTimestamps = Date.now()
// console.log(myTimestamps);
// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(myTimestamps/1000));     // To convert milliseconds to seconds

const newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getTime());

const newDate1 = new Date();
console.log(newDate1.toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric"
}))