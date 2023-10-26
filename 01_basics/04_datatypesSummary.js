/*
datatypes in js:
Primitives: call by values
Non-Primitives/Reference: call by reference

categorised on the basis of how data is stored and accessed from memories

Primitives:
7 types : String, Number, Boolean, null, undefined, Symbol, BigInt



Reference (Non-Primitives)

Arrays, Objects, Functions
we can store function in var

JS is dynamically typed language
*/


const id = Symbol('123');
const anotherID = Symbol('123');

console.log(id === anotherID);


const bigNumber = 4571238904578905728932894389578743589738957489473598435n

console.log(typeof bigNumber);

const nums = [1, 2, 3]
let obj = {
    name: "hvdas",
    age: "21"
}

const myFunc = () => {
    console.log("hvdass");
}

console.log(typeof nums);
console.log(typeof obj);
console.log(typeof myFunc);

// return type of function can also be known as function-object




// +++++++++++++++++++++++++++++++++++++++++++

/*
stack(primitive), heap(non-primitive)
*/

let u1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let u2 = u1
u2.email = "hvdas@google.com"

console.log(u1.email);
console.log(u2.email);