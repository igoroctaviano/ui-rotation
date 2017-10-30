const HOST = "localhost";
const PORT = "8006";

const handleHTTP = (req, res) => {
  app.get("/", function(req, res) {});

  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.write("Hello World ");
      res.end("=)");
    } else {
      res.writeHead(403);
      res.end("Get outta here!");
    }
  } else {
    res.writeHead(403);
    res.end("Get outta here!");
  }
};

const http = require("http");
const server = http.createServer(handleHTTP).listen(PORT, HOST);
