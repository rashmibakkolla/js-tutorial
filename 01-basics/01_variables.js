const accountId = 144553
let accountEmail = "rashmi@google.com"
var accountPassword = "12345"
accountCity  = "Mumbai"
let accountState;
//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bangaluru"
console.log(accountId);



/*
prefer not to use var
because of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])