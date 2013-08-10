var http = require("http");

http.createServer(function(request, response) {
    console.log("Request received.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello Hackathon!");
    response.end();
}).listen(8080);

console.log("server has started.");
