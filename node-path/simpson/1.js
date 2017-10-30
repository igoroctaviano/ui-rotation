function printHelp() {
  console.log("1.js (c) Igor Octaviano");
  console.log("");
  console.log("Usage:");
  console.log("--help    print this help");
  console.log("--name    print say hello to {NAME}");
  console.log("");
}

var minimist = require("minimist");
var args = minimist(process.argv.slice(2), { string: "name" });

if (args.help || !args.name) {
  printHelp();
  process.exit(1);
}

var name = args.name;
process.stdout.write("Hello " + name + "\n");
