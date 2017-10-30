const fs = require('fs');
const ASQ = require('asynquence');
require("asynquence-contrib");

const readFile = (fileName) => {
  const sq = ASQ();

  fs.readFile(fileName, sq.errfcb());

  return sq;
}

const delayMsg = (done, contents) => setTimeout(() => done(contents), 1000);

module.exports.say = function say(fileName) {
  return readFile(fileName).then(delayMsg);
}