const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');






// create the connection to database

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'rootlucky',
});

// let q = "SHOW TABLES";
// inserting new data

// let q = "Insert into user (id,username,email,password) values (?,?,?,?)";

let q = "Insert into user (id,username,email,password) values ?";

let user = [
  ["1231","1231_newuser","abc31@gmail.com","31abc"],
  ["124","124_newuser","abc4@gmail.com","4abc"],
  ["125","125_newuser","abc5@gmail.com","5abc"],
  ["126","126_newuser","abc6@gmail.com","6abc"]
];


try{
  connection.query(q,[user],(err,result)=>{
    if(err) throw err;
    console.log(result);
    // console.log(result.length);
    // console.log(result[0]);
    // console.log(result[1]);
  });
 
}
catch(err){
  console.log(err);
}

connection.end();

// let getRandomUser = () => {
//   return {
//     id: faker.datatype.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// };





// console.log(getRandomUser());


