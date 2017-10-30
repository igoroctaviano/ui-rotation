const minimist = require("minimist");

const printHelp = () => {
  console.log("4.js (c) Igor Octaviano");
  console.log("");
  console.log("Usage:");
  console.log("--help    print this help");
  console.log("--name    read the file of {NAME} and output the content");
};

const args = minimist(process.argv.slice(2), { string: "file" });

if (args.help || !args.file) {
  printHelp();
  process.exit(1);
}

const hello = require("./helloworld3.js");
hello
  .say(args.file)
  .val(contents => console.log(contents.toString()))
  .or(err => console.log(err.message));
