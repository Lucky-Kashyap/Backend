module.exports = function sum(...nums) {
  return nums.reduce((acc, cur) => cur + acc);
};

// console.log(sum(10, 3, 4, 5, 6, 7, 7));

// console.log(sum(10, 3));

// console.log(sum(10, 7, 7));

// module.exports = { sum };
