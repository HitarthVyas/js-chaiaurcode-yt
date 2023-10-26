const accountId = 144553
let accountEmail = "hitarthvyas02@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

console.table([accountId, accountEmail, accountPassword, accountCity])

/*
prefer not to use var
because of issues in block scope and functional scope
the value of variable will be valid for a particular block only in a code if we use let
the value of variable declared using var will have global scope (like c/c++/java)
*/