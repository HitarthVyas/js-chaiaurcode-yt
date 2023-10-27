const user = {
  username: "hvdas",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this)
  },
};

// user.welcomeMessage()
// user.username = "hvd"
// user.welcomeMessage()

// console.log(this)
// global object in browser is window

// user.welcomeMessage()


function one() {
    console.log(this);
}

// one()


// implicit return ---->> search on google

// const addTwo = (num1, num2) => ( username: "hvdas" )
const addTwo = (num1, num2) => ({ username: "hvdas" })

console.log(addTwo(1, 2));