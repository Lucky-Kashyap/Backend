const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const morgan = require("morgan");
// const cookieParser = require("cookie-parser");

// app.use(morgan("tiny"));

// app.use(morgan("short"));
// app.use(morgan("combined"));

// app.use(cookieParser());

// const cors = require("cors");

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

// app.get("/", (req, res, next) => {
// console.log(req);
// console.log(req.params);
// console.log(req.body);
// console.log(req.cookies);
// console.log(req.query);
// console.log(req.ip);
// console.log(req.headers);
// console.log(req.url);
// console.log(req.method);

// res.send("Hey");

// res.send(hey);

// try {
//   res.send(hey);
// } catch (err) {
//   next(err);
// }

// res.render("index");
// });

// app.get("/check", (req, res) => {
// console.log(req.query);

//   console.log(req.body);

//   res.send("form handle successfully");
// });

// app.post("/create", (req, res) => {
// console.log(req.query);

//   console.log(req.body);

//   res.send("form handle successfully");
// });

// app.get("/test", (req, res) => {
//   res.send("GET REQUEST");
// });
// app.post("/test", (req, res) => {
//   res.send("POST REQUEST");
// });
// app.put("/test", (req, res) => {
//   res.send("PUT REQUEST");
// });
// app.patch("/test", (req, res) => {
//   res.send("PATCH REQUEST");
// });
// app.delete("/test", (req, res) => {
//   res.send("DELETE REQUEST");
// });

// app.get("/profile", (req, res) => {
//   res.render("profile");
// });

// app.get("/profile/:name", (req, res) => {
// console.log(req.params.name + 's page');

//   let { name } = req.params;

//   console.log(name);
//   res.send("profile page " + name);
// });

// app.get("/author/:username/:age", (req, res) => {
//   let { username, age } = req.params;

//   res.send("something about " + username + " who is of " + age);
// });

// app.get("/", (req, res) => {
// req.flash("error", "Invalid credentials");

// res.send("Hello World!!");
// res.redirect("/error");

//   res.send("hey");
// });

// app.get("/cookie", (req, res, next) => {
//   res.cookie("banned", "true");
//   res.send("cookiee parser");
// });

// app.get("/check", (req, res, next) => {
//   console.log(req.cookies.banned);

//   res.send("checking");
// });

// app.get("/share", cors(), (req, res, next) => {
//   res.send("hey cors");
// });

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

// error handler

// app.use((err, req, res, next) => {
//   res.status(500).send(err.message);
// res.status(500).send("Internal Server Error");
// });

app.get("/", (req, res, next) => {
  res.send("working");
});

let data = [1, 2, 3, 4];

app.get("/data", (req, res, next) => {
  res.send(data);
});

app.post("/data/:num", (req, res, next) => {
  // console.log(typeof req.params.num);

  data.push(parseInt(req.params.num));

  res.send(data);
});

app.get("/api/testing/development", (req, res) => {
  res.send("api development testing");
});

app.get("/api/testing/development/user", (req, res) => {
  res.send("API USER");
});

app.get("/api/testing/development/prod", (req, res) => {
  res.send("PROD API");
});

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
