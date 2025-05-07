const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

var server = http.createServer(function (req, res) {
  //var q = url.parse(req.url, true).query;
  //var txt = q.fname + " " + q.lname;
var q = url.parse(req.url, true);
let filePath = "." + req.url;
if (filePath === "./") {
    filePath = "./index.html";
}

const extname = path.extname(filePath);
let contentType = "text/html";
if (extname === ".css") {
    contentType = "text/css";
}

fs.readFile(filePath, function(err, htmlData) {
    if (err) {
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.write("404 Not Found");
        return res.end();
    }
    res.writeHead(200, {'Content-Type': contentType});
    res.write(htmlData);
    res.end();
  });
})


server.listen(8080);