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
