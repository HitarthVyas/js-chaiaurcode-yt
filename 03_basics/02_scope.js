var a = 100
let b = 200

if(true) {
    var a = 10
    let b = 20
    // console.log(a);
    // console.log(b);
}

// console.log(a);
// console.log(b);

// JS gives line by line execution

console.log(addone(2));
function addone(num) {
    return num+1
}

addTwo(4)
const addTwo = function(num) {
    return num + 2
}