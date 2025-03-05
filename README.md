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

#### Cookie Parser:

- use cookie

      res.cookie("banned", "true");

      console.log(req.cookies.banned);

#### Use morgan:

- For more info (HTTP request logger middleware for node.js)

      const morgan = require("morgan");
      app.use(morgan("tiny"));

      app.use(morgan("short"));
      app.use(morgan("combined"));

#### Request & Response

- frontEnd > BackEnd > FrontEnd
- req : data come from browser
- res : send via server

      app.get("/", (req, res) => {
      // console.log(req);
      // console.log(req.params);
      // console.log(req.body);
      // console.log(req.cookies);
      // console.log(req.query);
      // console.log(req.ip);
      // console.log(req.headers);
      // console.log(req.url);
      console.log(req.method);

      res.send("Hey");
      });

#### Dynamic Routing

- Static

      app.get('/username/harsh',(req,res)=>{
            res.send('username harsh');
      });

- Dynamic

      app.get("/profile/:name", (req, res) => {
      // console.log(req.params.name + 's page');

      let { name } = req.params;

      console.log(name);
      res.send("profile page " + name);
      });

      app.get("/author/:username/:age", (req, res) => {
      let { username, age } = req.params;

      res.send("something about " + username + " who is of " + age);
      });

##### Server side Rendering

- Use EJS template engine

            npm i ejs

            app.set('view engine','ejs')

- create a views folder

- create a view index.ejs

- load the html in the ejs page

- and use res.render in place of the res.send to render any page from views folder

- Handle Form

  - Make form in index.ejs
  - make sure we have name attribute in all inputs nd check its method
  - we set action='/check'
  - And set check route in index.js file

            app.get('/check',(req,res)=>{
                  console.log(req.query);
                  res.send('form handle');
            })

  - And for post method & make sure to include these two methods in POST method

           app.use(express.json());
           app.use(express.urlencoded({ extended: true }));

            app.post('/check',(req,res)=>{
                 console.log(req.body);
                 res.send('form handle');
           })

#### HTTP Methods in API Development

- GET
- POST
- PUT
- PATCH
- DELETE

#### Error Handling

- Two types error

  - top level error
  - Reference Error (Req/Res) cycle

           app.get("/", (req, res, next) => {
                 try {
                       res.send(hey);
                 } catch (err) {
                       next(err);
                 }
           });

           app.use((err, req, res, next) => {
           res.status(500).send(err.message);
           // res.status(500).send("Internal Server Error");
           });

- In Express.js middleware, errors are typically handled by calling the next function with an error parameter. This passes the error to the next error-handling middleware function or to the default error handler, allowing for centralized error handling in the application.

#### Understanding Postman

- A Postman collection is a group of requests and scripts organized together. It allows users to group related API requests, organize them into folders, and include scripts and variables to automate testing and documentation processes.

- Add data

      let data = [1, 2, 3, 4];

      app.get("/data", (req, res, next) => {
      res.send(data);
      });

      app.post("/data/:num", (req, res, next) => {
      // console.log(typeof req.params.num);

      data.push(parseInt(req.params.num));

      res.send(data);
      });

#### Khatabook (File based Project)

- create file
- delete/ update / read / Edit
- file page

### File Module revisit

- Read file
- write file
- Rename file name

### Open any app Using Node JS

- require package

      const { exec } = require("child_process");

- On windows

      exec("start chrome");
      exec("start msedge");
      exec("start firefox");

## Building DevTinder UI

- Used React for frontEnd.
- Remove unnecessary code & create Hello World app.
- Created Navbar component
