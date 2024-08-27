const fs = require("fs");
const { exec } = require("child_process");

// write file
// read file
// update file
// append file
// delete files
// folder creation
// copy files
// copy rename move

// fs.writeFile("abcd.txt", "hey hello", function (err) {
//   if (err) console.log(err);
//   else console.log("file created");
// });

// fs.readFile("abcd.txt", function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// encoding

// fs.readFile("abcd.txt", "utf8", function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// fs.readFile("abcd2.txt", "utf8", function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// fs.appendFile("abcd.txt", " Lucky Kashyap", (err) => {
//   if (err) console.log(err);
//   else console.log("append file");
// });

// fs.rename("abcd.txt", "test.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("rename file");
// });

// fs.unlink("test.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("delete file");
// });

// fs.mkdir("lolo", (err) => {
//   if (err) console.log(err);
//   else console.log("make directory");
// });

// fs.readdir("lolo", (err, files) => {
//   if (err) console.log(err);
//   else console.log(files);
// });

// fs.readdir("lolo", { withFileTypes: true }, (err, files) => {
//   if (err) console.log(err);
//   else console.log(files);
// });

// 1 for file
// 2 for folder

// fs.rmdir("lolo", (err) => {
//   if (err) console.log(err);
//   else console.log("deleted");
// });

// fs.rmdir("lolo", { recursive: true }, (err) => {
//   if (err) console.log(err);
//   else console.log("deleted");
// });

// fs.rm("lolo", { recursive: true }, (err) => {
//   if (err) console.log(err);
//   else console.log("deleted");
// });

// synchronous API

// fs.writeFileSync("abcd.txt", "lucky kashyap hey hello");

// console.log("created");

// fs.readFileSync("hey2.txt", "utf8");

// const data = fs.readFileSync("abcd.txt", "utf8");

// console.log("read");

// console.log(data);

// fs.writeFileSync(
//   "abcd.txt",
//   "dobara se krdo bhai file write  node JS bhai...!!!"
// );

// const res = fs.readFileSync("abcd.txt");

// console.log(res);

// console.log(res.toString());

// Open chrome using NODE JS

// On windows

// exec("start chrome");

// firefox
// exec("start firefox");

// edge
// exec("start msedge");

// wattsapp
// exec("start wattsapp://");

// telegram
// exec("start telegram://");
