const accountId = 144553
let accountEmail = "kiran@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed

accountEmail = "kirmada@gmail.com"
accountPassword = "212121"
accountCity = "Mumbai"

// console.log(accountId);


/*
    Prefer not to use var
    because of issue in block and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])