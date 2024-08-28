const http = require("http");

const server = http.createServer((req, res) => {
  res.send("Hello from Node JS Server");
});

server.listen(3000);
