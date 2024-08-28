// const calculate = require("./calc");

const { add, sub, mul, div } = require("./calc");

let a = 10;
let b = 20;

// console.log(calculate);

// console.log(global === globalThis);

// console.log("app file runs....");

// console.log("Addition of two numbers....", calculate.add(a, b));
// console.log("Subtraction of two numbers....", calculate.sub(a, b));
// console.log("Multiplication of two numbers....", calculate.mul(a, b));
// console.log("Division of two numbers....", calculate.div(a, b));

console.log("Addition of two numbers....", add(a, b));
console.log("Subtraction of two numbers....", sub(a, b));
console.log("Multiplication of two numbers....", mul(a, b));
console.log("Division of two numbers....", div(a, b));
