var fs = require('fs');
var http = require('http');
var path = require('path');

var filePath = path.join(__dirname, '/testdata/sites/');

exports.readUrls = function(filePath, cb){
  //read file at filepath
  var urls = fs.readFileSync(filePath, 'utf8').toString().split("\n");
  return cb(urls);
};

exports.downloadUrls = function(urls){
  for (i = 0; i < urls.length; i++){
    var destination = path.join(filePath, urls[i]);
    http.get(urls[i], function(res) {
      console.log(res.data);
      fs.writeFileSync(destination, res);
    });
    return true;
  }
  // fixme
};
