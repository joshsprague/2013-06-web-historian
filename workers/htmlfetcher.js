var helpers = require("./lib/html-fetcher-helpers");
var path = require("path");

var filePath = path.join(__dirname, "/data/sites.txt");

helpers.readUrls(filePath, function(urls){
  helpers.downloadUrls(urls);
});