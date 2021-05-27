const { readFile } = require("fs");

console.log("this is the first task!");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
  console.log("completed the task!");
});

console.log("this is the next task!");
