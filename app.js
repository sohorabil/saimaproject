const http = require("http");
const client = require("prom-client");

// collect default system metrics (CPU, memory, etc.)
client.collectDefaultMetrics();

const server = http.createServer(async (req, res) => {
  if (req.url === "/metrics") {
    res.writeHead(200, { "Content-Type": client.register.contentType });
    res.end(await client.register.metrics());
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("hello its a simple node.js app");
  }
});

server.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});