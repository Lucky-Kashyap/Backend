// module.exports = function sum(...nums) {
//   return nums.reduce((acc, cur) => cur + acc);
// };

// exports = function product(...nums) {
//   return nums.reduce((acc, cur) => cur * acc);
// };

function sum(...nums) {
  return nums.reduce((acc, cur) => cur + acc);
}

function product(...nums) {
  return nums.reduce((acc, cur) => cur * acc);
}

// console.log(sum(10, 3, 4, 5, 6, 7, 7));

// console.log(sum(10, 3));

// console.log(sum(10, 7, 7));

// module.exports = { sum };

// console.log(module.exports === exports);

// exports.sum = sum;
// exports.product = product;

let send = module.exports;

send.sum = sum;
send.product = product;
