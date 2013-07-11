var path = require('path');
module.exports.datadir = path.join(__dirname, "../data/sites.txt"); // tests will need to override this.
var url = require('url');
var fs = require('fs');

module.exports.handleRequest = function (req, res) {

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
    html = fs.readFileSync(path.join(__dirname, '/public/index.html'));
    res.writeHead(statusCode, defaultCorsHeaders);
    res.write(html);
    res.end();
  }

  if (req.url === '/styles.css') {
    styles = fs.readFileSync(path.join(__dirname, '/public/styles.css'));
    res.writeHead(statusCode, defaultCorsHeaders);
    res.write(styles);
    res.end();
  }

  if(req.url === '/archive?www.google.com' && req.method === 'GET'){
    var siteHTML = fs.readFileSync(path.join(__dirname, '/public/www.google.com'));
    res.writeHead(statusCode, defaultCorsHeaders);
    res.end(siteHTML);
  }

  if (req.url === '/archive' && req.method === 'POST') {
    req.on('data', function(data) {
      fs.appendFile(path.join(__dirname, '../data/sites.txt'), '\n'+data);
      console.log(data);
    });
    res.writeHead(302, defaultCorsHeaders);
    res.end();
  }

};
