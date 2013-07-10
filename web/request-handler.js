var path = require('path');
module.exports.datadir = path.join(__dirname, "../data/sites.txt"); // tests will need to override this.

module.exports.handleRequest = function (req, res) {
  console.log(exports.datadir);
  console.log(res);

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

  if (req.url === '/styles.css') {
    styles = fs.readFileSync('./public/styles.css');
    res.writeHead(statusCode, defaultCorsHeaders);
    res.write(styles);
    res.end();
  }

  if (req.url === "/#index" && req.method === 'GET') {
    //serve HTML for archived page
    console.log("Inside GET Request");
    var siteHTML = fs.readFileSync('./public/www.google.com');
    console.log("Executed Line 34: Use readFileSync to save file to siteHTML");
    res.writeHead(statusCode, defaultCorsHeaders);
    console.log("Executed Line 36: writeHead");
    res.write(siteHTML);
    console.log("Executed Line 38: res.write(siteHTML)");
    res.end();
    console.log("Executed Line 40: res.end()");
  }

  else if (req.url === "/#index" && req.method === 'POST') {
    //append file on sites.txt
    statusCode = 302;
  }

  else {
    res.writeHead(404, defaultCorsHeaders);
    res.end("This is a weird error.");
    console.log(req.url);
  }
};
