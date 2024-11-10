const accountId = 14453
let accountEmail ="ujjwal@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState
// accountId = 2 // not allowed

accountEmail = "ujjwal@.com"
accountPassword = "1273"
accountCity = "Bengaluru"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*prefer not to use var because of issue in block scope 
and functional scope
*/