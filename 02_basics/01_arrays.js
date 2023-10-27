// it creates the shallow copy (shares the same reference)

// push(10) -> add values in last
// pop() -> removes last value
// unshift(10) -> add values in beginning
// shift() -> removes first value
// includes(10) -> return bool val
// indexOf(10)
// join()
// slice, splice

// join

let myArr = [0, 1, 2, 3, 4, 5] // type it in browser console and see the prototype section

let newArr = myArr.join() // returns a string value

// console.log(newArr);
// console.log(typeof newArr);

//  slice splice

// console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);



const krsna = ["Madhava", "Hari", "Madhusudan"]

const more_names = ["Hrishikesh", "Damodar", "Govinda"]

// krsna.push(more_names);
// console.log(krsna);

const names = krsna.concat(more_names)
// console.log(names);

const names1 = [...krsna, ...more_names]
// console.log(names1);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const flat_arr = arr.flat(Infinity)
// console.log(flat_arr);

// console.log(Array.isArray("hvdas"));
// console.log(Array.from("hvdas"));
// console.log(Array.from({name: "hvdas"}));

let s1 = 100
let s2 = 200
let s3 = 300


console.log(Array.of(s1, s2, s3));