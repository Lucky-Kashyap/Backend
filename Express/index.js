const express = require("express");
const app = express();
const cors = require("cors");

// app.use(cors());

// const flash = require("connect-flash");

// const expressSession = require("express-session");

// console.log(app);

let port = 3000;

// app.use(
//   expressSession({
//     secret: "random stuff",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(flash());

// app.use((req, res, next) => {
//   console.log("hey helo from middleware");

//   next();
// });

// app.use((req, res, next) => {
//   console.log("Another middleware..!!!");

//   next();
// });

app.get("/", (req, res) => {
  // req.flash("error", "Invalid credentials");

  // res.send("Hello World!!");
  // res.redirect("/error");

  res.send("hey");
});

app.get("/share", cors(), (req, res, next) => {
  res.send("hey cors");
});

// app.get("/error", (req, res) => {
//   let msg = req.flash("error");

//   res.send(msg);
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });
// app.get("/create", (req, res, next) => {
//   req.session.polo = true;
//   res.send("Done..!!!");
// });

// app.get("/check", (req, res, next) => {
//   console.log(req.session.polo);
// });

app.get("*", (req, res) => {
  res.send("if nothing works i will");
});

app.listen(port, () => {
  console.log("start server");
});

// app.use((req,res)=>{
//     // console.log(req);
//     // console.log(res);

//     res.send('This is basic response');
//     console.log('request recieve');
// })

// app.get('/',(req,res)=>{
//     res.send('Hello i am root path');
// })

// app.get('/about',(req,res)=>{
//     res.send('You contacted about path');
// })

// app.get('/conatact',(req,res)=>{
//     res.send('You contacted conatct path');
// })

// app.get('/services',(req,res)=>{
//     res.send('You contacted services path');
// })

// app.get('*',(req,res)=>{
//     res.send('You conatcted wrong path');
// })

// app.post('/',(req,res)=>{
//     res.send('Data ENter');
// })

// app.get('/:username/:id',(req,res)=>{
// console.log(req.params);

//     const {username,id} = req.params;

//     let htmlStr = `<h1>Welcome to Page @${username}</h1>`

//     res.send(htmlStr);
// })

// app.get('/search',(req,res)=>{
// console.log(req.query);

//     let {q} = req.query;

//     if(!q){
//         res.send('No Query Found');
//     }

//     res.send(`Result Query ${q}`);
// })
