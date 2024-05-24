const http = require("http");

var server = http.createServer(function (req, res) {
  // res.end("server runs successfully");

  res.end("server runs using nodemon");
});

server.listen(3000);
