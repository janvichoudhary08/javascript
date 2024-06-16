const accountId = 144553
let accountEmail = "Janvi@google.com"
var accountPassword = "12345"
accountCity ="Laksar"

accountEmail = "jc@.com"
accountPassword = "12121"
accountCity = "Gurugram"

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity])
/*
prefer not to use var because of issue in block scope and functional scope
*/