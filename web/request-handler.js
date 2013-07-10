exports.datadir = __dirname + "data/sites.txt"; // tests will need to override this.
var fs = require('fs');

exports.handleRequest = function (req, res) {
  console.log(exports.datadir);

  var statusCode;

  if (req.method === 'GET') {
    statusCode = 200;
    //serve HTML for archived page
    var siteHTML = fs.readFileSync('./data/sites/'+ userInput);
    response.write('siteHTML', header);
    response.end();
  }

  else if (req.method === 'POST') {
    //append file on sites.txt
    statusCode = 302;
    var userInput
  }

  else {
    //throw 404 or 406
  }
};
