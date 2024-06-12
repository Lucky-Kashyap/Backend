const express = require("express");

const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    console.log(files);
    res.render("index", { files });
  });

  // res.send("hey");
});

app.get("/create", (req, res) => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); //
  const year = today.getFullYear();

  const fileName = `${day}-${month}-${year}.txt`;

  fs.writeFile(`./files/${fileName}`, "daal cheeni", (err) => {
    if (err) res.send("something went wrong");
    else res.send("DONE");
  });
});

app.listen(3000);
