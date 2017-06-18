/**
 * Created by panda on 2017/6/17.
 */
var http = require('http');
var url = require('url');

function start(router){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("request for"+pathname+" received");

        router(pathname);

        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("hello world");
        response.end();
    }

    http.createServer(onRequest).listen(999);
    console.log("Server has start");
}

exports.start = start;