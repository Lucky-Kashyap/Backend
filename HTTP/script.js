const http = require("http");
const fs = require("fs");
const _ = require("lodash");

// const path = require("path");
// var server = http.createServer(function (req, res) {
// res.end("server runs successfully");

//   res.end("server runs using nodemon");
// });

// server.listen(3000);

let port = 3000;

var server = http.createServer(function (req, res) {
  // console.log(req.url === "/");
  // res.end("server runs successfully");
  // console.log(req.url, req.method);
  // res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");
  let path = "./dir";
  let arr = [1, 2, 3, 4, 5, 6];
  console.log(_.first(arr));

  let randomNum = _.random(1, 100);

  console.log(randomNum);
  switch (req.url) {
    case "/":
      path += "/index.html";
      break;
    case "/about":
      path += "/about.html";
      break;

    default:
      path += "/404.html";
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
  // fs.readFile("./dir/index.html", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   } else {
  //     res.write(data);
  //     res.end();
  //   }
  // });

  // res.write("Learning Node JS");
  // res.write("<h1>Learning Node JS</h1>");

  // res.write("<head><title>Node JS Mastery</title></head>");

  // res.end();

  // if (req.url === "/") {
  //   res.end("hey");
  // } else if (req.url === "/profile") {
  //   res.end("profile page");
  // } else {
  //   res.end("page not found");
  // }

  // if (req.url === "/") {
  //   fs.readFile(path.join(__dirname, "dir/index.html"), (err, data) => {
  //     if (err) {
  //       res.writeHead(500);
  //       res.end("Error loading the page");
  //     } else {
  //       res.writeHead(200);
  //       res.end(data);
  //     }
  //   });
  // } else if (req.url === "/profile") {
  //   res.end("<h1>Profile Page</h1>");
  // } else {
  //   res.writeHead(404);
  //   res.end("<h1>404 - Page Not Found</h1>");
  // }
});

server.listen(port, "localhost", () => {
  console.log(`Listening to port ${port}`);
});
