const accountId = 16255;
let accountEmail = "abcd@gmail.com";
var accountPassword = 12345;
accountCity = "Chennai";
let accountState;

// accountId = 16250; //not allowed to change the constant variable

accountEmail = "1234@gmail.com";
accountPassword = "54321";
accountCity = "Vellore";

/*
Prefer not to use var because of issue
in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);