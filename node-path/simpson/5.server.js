const HOST = "localhost";
const PORT = "8006";

const handleHTTP = (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/plain" });

      ASQ(done => setTimeout(() => done(Math.random()), 1000))
        .then((done, num) => {
          setTimeout(() => done("A random number could be: " + num, 1000));
        })
        .val(msg => res.end(msg));
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
const ASQ = require("asynquence");
const server = http.createServer(handleHTTP).listen(PORT, HOST);
