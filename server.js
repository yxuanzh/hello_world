var http = require("http");

http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/plain'});

    response.end("hello world\n");
}).listen(8080)

console.log("server running at http://128.237.147.187:8888");