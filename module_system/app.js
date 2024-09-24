const { sum, product } = require("./common js/app");

// var num = 35;

// var num = 50;

// global.num = 60;

const user = {
  name: "Lucky Kashyap",
  age: 23,
  address: {
    city: "Agra",
    state: "Uttar Pradesh",
  },
  hobbies: ["Teaching", "Coding", "TT"],
};

let address = user.address;

address = {
  pincode: 282006,
  country: "India",
};

// address.pinCode = 282006;
// address.country = "India";

// console.log(num);

// console.log(sum(1, 2, 3, 4));
// console.log(product(1, 2, 3, 4));

// console.log(sum, product);

// console.log(sum.sum(1, 2, 3, 3));

console.log(address);

console.log(user.address);
