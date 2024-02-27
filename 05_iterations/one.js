// For Loop:

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value is: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop value is: ${j} and Outer Loop value is: ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArray = ["Pulsar-150", "Dominar-250", "NS-200"];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// break and continue:

for (let i = 1; i <= 20; i++) {
    if (i == 5){
        // console.log(`Detected ${i}`);
        break;
    }
    // console.log(`Value of i is: ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log(`Detected ${i}`);
        continue;
    }
    console.log(`Value of i is: ${i}`);
}
