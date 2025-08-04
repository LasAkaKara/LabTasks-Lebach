const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Bach's home Page</p></body></html>");
    res.end();
  } else if (req.url == "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Bach's student Page</p></body></html>");
    res.end();
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Bach's admin Page</p></body></html>");
    res.end();
  } else if (req.url == "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Hello World!", name: "Bach" }));
    res.end();
  } else {
    res.end("404 Not Found\n");
  }
});

server.listen(8000);
console.log("Node.js running at port 8000...");
