const fs = require("fs");
const ASQ = require("asynquence");
require("asynquence-contrib");

const readFile = fileName => {
  return ASQ(function(done) {
    let stream = fs.createReadStream(fileName);
    let contents = "";
    stream.pipe(fs.createWriteStream(fileName + ".backup"));
    stream.on("data", chunk => (contents += chunk));
    stream.on("end", () => done(contents));
  });
};

const delayMsg = (done, contents) => setTimeout(() => done(contents), 1000);

module.exports.say = fileName => readFile(fileName).then(delayMsg);
