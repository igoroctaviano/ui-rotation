var fs = require('fs');

module.exports.say = function say(fileName, cb) {
  return fs.readFile(fileName, function(err, contents) {
    if (err) { 
      cb(err); 
    }
    else { 
      setTimeout(function() { 
        cb(null, contents); 
      }, 1000);
    }
  });
}