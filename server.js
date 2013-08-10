var http = require("http");
var url = require("url");
function start() {
  function onRequest(request,response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request for" + pathname + " received.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello Hackathon!");
    response.end();
  }

  http.createServer(onRequest).listen(8080);
  console.log("Server is up yo!");
}
exports.start = start;
