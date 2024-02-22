const sports_bikes = ["ns-200", "dominar-250", "pulsar-180"];

const normal_bikes = ["unicorn", "shine", "passion-pro"];

// sports_bikes.push(normal_bikes);
// console.log(sports_bikes);
// console.log(sports_bikes[3][1]);

// const allBikes = sports_bikes.concat(normal_bikes);
// console.log(allBikes);

// Spread Operators:

const all_Bikes = [...sports_bikes, ...normal_bikes];
// console.log(all_Bikes);

const another_array = [10, 20, 30, [40, 50], 60, [70, 80], [90], 100];
const another_new_array = another_array.flat(Infinity);
// console.log(another_new_array);


console.log(Array.isArray("Raashid"));      //To check whether it is array
console.log(Array.from("Raashid"));         //To convert in array
console.log(Array.from({name: "Raiyan"}));  // output: Empty array

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));