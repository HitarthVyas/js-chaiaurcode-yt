// const tinderUser = new Object() //singleton object

const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "hvdas"
tinderUser.isLoggedIn = false

//  console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitakara Vamana",
            lastname: "das"

        }
    }
}

// console.log(regularUser.fullname?.userfullname?.lastname)  // ? is used to protect against if sucha value does not exist


const o2 = {2: "a", 4: "b"} //type it in browser console to get more methods
const o1 = {1: "a", 2: "b"}
// const o2 = {3: "a", 4: "b"}
const o4 = {5: "a", 6: "b"}

// const o3 = { o1, o2 }

// const o3 = Object.assign(o1, o2)
// const o3 = Object.assign({}, o1, o2, o4)

// const o3 = { ...o1, ...o2 }

// console.log(o3);

const users = [
    {
        id: 1,
        email: "hvd@g.com"
    },
    {
        id: 1,
        email: "hvd@g.com"
    },
    {
        id: 1,
        email: "hvd@g.com"
    },
    {
        id: 1,
        email: "hvd@g.com"
    },
]

// console.log(Object.keys(tinderUser));
// console.log(typeof Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hvdas",
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// https://randomuser.me/
// https://jsonformatter.org/