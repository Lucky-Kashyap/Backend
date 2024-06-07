# Node JS Learning

## File System Module

- write file

      const fs = require("fs");

      fs.writeFile('abcd.txt','hey hello',(err)=>{
        if(err) console.log(err);
        else console.log('file created');
      })

- Read file

      fs.readFile("abcd2.txt", "utf8", function (err, data) {
        if (err) console.log(err);
        else console.log(data);
      });

- Update file

      fs.appendFile("abcd.txt", " Lucky Kashyap", (err) => {
        if (err) console.log(err);
        else console.log("append file");
      });

- Rename file

      fs.rename("abcd.txt", "test.txt", (err) => {
        if (err) console.log(err);
        else console.log("rename file");
      });

- Delete file

      fs.unlink("test.txt", (err) => {
        if (err) console.log(err);
        else console.log("delete file");
      });

- creating folders in Node JS

      fs.mkdir("lolo", (err) => {
        if (err) console.log(err);
        else console.log("make directory");
      });

- Reading folders

      fs.readdir("lolo", (err, files) => {
        if (err) console.log(err);
        else console.log(files);
      });

      // 1 for file
      // 2 for folder

- Deleting folders

      fs.rmdir("lolo", (err) => {
      if (err) console.log(err);
      else console.log("deleted");
      });

      fs.rm("lolo", { recursive: true }, (err) => {
        if (err) console.log(err);
        else console.log("deleted");
      });

- synchronous APIs (Blocking vs. Non-blocking)

      fs.readFileSync("abcd.txt", "utf8");

## HTTP Module

      const http = require("http");

      var server = http.createServer(function (req, res) {
      res.end("server runs successfully");
      });

      server.listen(3000);

- Routing

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

## HTTP Methods

- GET
- POST
- PATCH
- DELETE
- PUT

## STATUS CODE

- 1xx Informational Responses: These codes indicate that the server has received the request and the process is continuing.

  - 100 Continue: The server has received the request headers, and the client should proceed to send the request body.

  - 101 Switching Protocols: The requester has asked the server to switch protocols, and the server has agreed to do so.

- 2xx Successful Responses: These codes indicate that the request was successfully received, understood, and accepted.

  - 200 OK: The request has succeeded.

  - 201 Created: The request has been fulfilled and a new resource has been created.

  - 202 Accepted: The request has been accepted for processing, but the processing has not been completed.

- 3xx Redirection Messages: These codes indicate that further action needs to be taken by the user agent to fulfill the request.

  - 301 Moved Permanently: The resource requested has been permanently moved to a new URL.

  - 302 Found: The resource is temporarily located at a different URL.

  - 304 Not Modified: The resource has not been modified since the version specified by the request headers.

- 4xx Client Error Responses: These codes indicate that the client seems to have made an error.

  - 400 Bad Request: The server could not understand the request due to invalid syntax.

  - 401 Unauthorized: The client must authenticate itself to get the requested response.

  - 403 Forbidden: The client does not have access rights to the content.

  - 404 Not Found: The server can not find the requested resource.

- 5xx Server Error Responses: These codes indicate that the server failed to fulfill a valid request.

  - 500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.

  - 502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.

  - 503 Service Unavailable: The server is not ready to handle the request, often due to maintenance or overload.

## EXPRESS JS

- Set up express

      const express = require("express");
      const app = express();

      let port = 3000;

      app.get("/", (req, res) => {
      res.send("Hello World!!");
      });


      app.listen(port, () => {
      console.log("start server");
      });

- Handling non-existent routes

      app.get("*", (req, res) => {
      res.send("Hello World!!");
      });

- More on Express

  - app : constant
  - get : method
  - route : '/' path
  - handler : middleware function

#### Middlewares

- The function which have three parameters request, response, next called middleware

      app.use((req, res, next) => {
      console.log("Another middleware..!!!");

          next();

      });

#### Express Session

    app.use(
      expressSession({
        secret: "random stuff",
        resave: false,
        saveUninitialized: false,
      })
    );


    app.get("/create", (req, res, next) => {
      req.session.polo = true;
      res.send("Done..!!!");
    });

#### Connect flash middleware:

- ek route mein data save krke dusre route mein bhejna
- Ex: login (Error in credentials)
- Using this we need to configure express session

      const flash = require("connect-flash");
      app.use(flash());

      app.get("/", (req, res) => {
      req.flash("error", "Invalid credentials");
      res.redirect("/error");
      });

      app.get("/error", (req, res) => {
      let msg = req.flash("error");

          res.send(msg);

      });

#### CORS

- Use cors package

      npm i cors

      app.use(cors());
