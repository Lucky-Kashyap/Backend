const http = require("http");

// var server = http.createServer(function (req, res) {
// res.end("server runs successfully");

//   res.end("server runs using nodemon");
// });

// server.listen(3000);

var server = http.createServer(function (req, res) {
  // console.log(req.url === "/");
  // res.end("server runs successfully");

  if (req.url === "/") {
    res.end("hey");
  } else if (req.url === "/profile") {
    res.end("profile page");
  } else {
    res.end("page not found");
  }
});

server.listen(3000);
