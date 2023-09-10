const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');






// create the connection to database

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'rootlucky',
});

let q = "SHOW TABLES";


try{
  connection.query(q,(err,result)=>{
    if(err) throw err;
    // console.log(result);
    console.log(result.length);
    console.log(result[0]);
    console.log(result[1]);
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


