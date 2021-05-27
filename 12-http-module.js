const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage!");
  }

  if (req.url === "/about") {
    res.end("This is the about section!");
  }

  res.end(`
    <h1>Oops!</h1>
    <p>No such port!</p>
    <a href="/">back to page</a>
  `);
});

server.listen(5000);
