exports.datadir = __dirname + "data/sites.txt"; // tests will need to override this.
var fs = require('fs');

exports.handleRequest = function (req, res) {
  console.log(exports.datadir);

  var statusCode = 200;
  var defaultCorsHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "Origin, Content-Type, Accept",
    "access-control-max-age": 10, // Seconds.
    "Content-Type": "text/html"
  };
  var html, styles;

  if (req.url === '/') {
    html = fs.readFileSync('./public/index.html');
    res.writeHead(statusCode, defaultCorsHeaders);
    res.write(html);
    res.end();
  }

  if (req.method === 'GET') {
    //serve HTML for archived page
    var siteHTML = fs.readFileSync('./data/sites/'+ userInput);
    res.writeHead(statusCode, header);
    res.write(statusCode, header);
    res.end('siteHTML');
  }

  else if (req.method === 'POST') {
    //append file on sites.txt
    statusCode = 302;
  }

  else {
    //throw 404 or 406
  }
};
