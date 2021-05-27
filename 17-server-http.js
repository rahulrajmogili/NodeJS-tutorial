const http = require("http");

const server = http.createServer((req, result) => {
  console.log("request server");
  result.end("the server is connected!");
});

// here, listen is asynchronous. event loop is waiting for requests to come in!
server.listen(5000, () => {
  console.log("Server connect on port: 5000.....");
});
