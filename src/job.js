var http = require('http');

http.createServer(function (req, res) {
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('hello world');
}).listen(999);

