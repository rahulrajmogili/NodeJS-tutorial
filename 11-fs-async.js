const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    return console.log(err);
  }
  const first = result;

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      return console.log(err);
    }

    const second = result;

    writeFile(
      "./content/result-async.txt",
      `This is a combined text ${first} ${second}`,
      (err, result) => {
        if (err) {
          return console.log(err);
        }
      }
    );
  });
});
