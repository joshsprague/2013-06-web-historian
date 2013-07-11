var fs = require('fs');

exports.readUrls = function(filePath, cb){
  //read file at filepath
  var urls = fs.readFileSync(filePath, 'utf8').toString().split("\n");
  return cb(urls);
};

exports.downloadUrls = function(urls){
  // fixme
};
