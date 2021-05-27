const { readFile } = require("fs");

console.log("this is the first task!");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
  console.log("completed the task!");
});

// here the readFile is offloaded since it is asynchronous. Thus it is only invoked after all the immediate LOC are executed.

console.log("this is the next task!");
