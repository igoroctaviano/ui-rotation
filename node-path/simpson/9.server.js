const HOST = "localhost";
const PORT = "8006";

const http = require("http");
const ASQ = require("asynquence");
const static = require("node-static");

const server = http.createServer(handleHTTP).listen(PORT, HOST);
const staticFiles = new static.Server(__dirname);
const io = require("socket.io").listen(server); // Hijacks http server;

function handleHTTP(req, res) {
  if (req.method === "GET") {
    if (/^\/\d+(?=$|[\/?#])/.test(req.url)) {
      req.addListener("end", () => {
        req.url = req.url.replace(/^\/(\d+).*$/, "/$1.html");
        staticFiles.serve(req, res);
      });
      req.resume();
    }
  } else {
    res.writeHead(403);
    res.end("Get outta here!");
  }
}

function handleIO(socket) {
  socket.on("disconnect", () => {
    clearInterval(interval);
    console.log("client disconnected");
  });

  let interval = setInterval(() => socket.emit("hello", Math.random()), 1000);

  socket.on("typed", message => socket.emit("message", message));
}

io.on("connection", handleIO);
