"use strict"; // treat all JS code as newer version

// alert("hello"); // we are using node not browser

/*
number => 2^53
bigint
string => ""
boolean => true/false
null => standard value/representation of empty value
undefined => if value is not assigned
symbol => uniqueness


object
*/

// see specifications on tc36.es

let names = "hvdas";
console.log(typeof null) // returns object
console.log(typeof(undefined)); // returns undefined

let score = "32sde";

let valInNum = Number(score);
// String()

console.log(typeof valInNum);

//  NaN => datatype => number
/*
in boolean:
1 => true
0 => false
"" => false
"hvdas" => true
*/


// tc39.es is official js documentation site