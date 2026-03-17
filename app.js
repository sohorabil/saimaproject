const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("hello its a simple node.js app");
});

server.listen(3005, () => {
  console.log("Server running on http://localhost:3005");
});