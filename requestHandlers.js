var exec = require("child_process").exec;
var fs = require('fs');
var htmlfile = "index.html";

function london(response){
    console.log("Request handler 'london' was called.");    
    var body = fs.readFileSync(htmlfile).toString();
  	response.writeHead(200, {"Content-Type":"text/html"});
	response.write(body);
	response.end();
}


function newyork(response) {
    console.log("Request handler 'newyork' was called.");
    response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Hello nyc");
	response.end();
}

exports.london = london;
exports.newyork = newyork;
