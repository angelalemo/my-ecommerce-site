var http = require('http');

http.createServer(function (req, res) {
  //res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"connection": ["General Enquery", "Classes", "Schedule", "Instructors", "Prices", "Other", "1"] }');
}).listen(5000);