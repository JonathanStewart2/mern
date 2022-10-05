'use strict';


//const maths = require("./maths");   // imports from maths.js
//destructed way of importing modules
const {add, subtract, multiply, divide } = require("./maths.js")

// console.log(maths.add(2,3));
// console.log(maths.subtract(11, 3));

console.log(add(2,3));
console.log(subtract(11,2));
console.log(multiply(5,5));
console.log(divide(88, 8));

const getPoke = require("./poke.js");
getPoke()