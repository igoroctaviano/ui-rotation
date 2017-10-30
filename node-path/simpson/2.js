var minimist = require("minimist");

function printHelp() {
  console.log("2.js (c) Igor Octaviano");
  console.log("");
  console.log("Usage:");
  console.log("--help    print this help");
  console.log("--name    read the file of {NAME} and output the content");
  console.log("");
}

var args = minimist(process.argv.slice(2), { string: "file" });

if (args.help || !args.file) {
  printHelp();
  process.exit(1);
}

var hello = require("./helloworld.js");
hello.say(args.file, function(err, contents) {
  console.log(contents.toString());
});
