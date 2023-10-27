/*
in function func()
func -> reference
() -> execution
*/

const loginUserMessage = (username="hvd") => {
    // if(username === undefined) {
    //     return "Please enter a username";
    // }
    // if(!username) {
    //     return "Please enter a username";
    // }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hvdas"));
// console.log(loginUserMessage());


const calculateCartPrice = (...num) => {
    return num
}
// ... is known as rest operator here

// console.log(calculateCartPrice(20, 40, 100))


const user = {
    username: "hvdas",
    price: 199,
}

const handleObject = (obj) => {
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
}

handleObject(user)
