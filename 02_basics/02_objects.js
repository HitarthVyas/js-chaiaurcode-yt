// singleton
// Object.create

// constructor always create singleton not object literal

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "hv",
    "full name": "hv das",
    [mySym]: "mykey1",
    age: 21,
    location: "Jaipur",
    email: "hvdas@gmail.com",
    isLoggrdIn: false,
    lastLoginDays: ["Mon", "Sat"]
}

// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "hv@google.com"
// Object.freeze(jsUser);
jsUser.email = "hvdas@google.com"
// console.log(jsUser);

jsUser.greeting = () => {
    console.log("Hello JS user");
}

jsUser.greeting2 = () => {
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greeting2());