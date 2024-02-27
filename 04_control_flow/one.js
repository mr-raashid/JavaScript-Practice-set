const temperature = 500;

if (temperature < 500){
    console.log("Tempature is less than 500");
}
else if (temperature < 600){
    console.log("Tempature is less than 600");
}
else if (temperature < 700){
    console.log("Tempature is less than 700");
}
else{
    console.log("Tempearture is greater than 700");
}


const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;
const loggedInFromFB = false;

if (userLoggedIn && debitCard){
    console.log("Allow to purchase");
}
if (loggedInFromEmail || loggedInFromFB){
    console.log("User logged In");
}
else{
    console.log("You need debit card to purchase");
}
