var exec = require("child_process").exec;
var fs = require('fs');
var request = require('request');

var htmlhead = "head.html";
var htmlfooter = "footer.html";
var htmllondon = "london.html";

function london(response){
    console.log("Request handler 'london' was called.");
    var head = fs.readFileSync(htmlhead).toString();
    var footer = fs.readFileSync(htmlfooter).toString();
    var body = fs.readFileSync(htmllondon).toString();
    var htmlfile = head + body + footer;
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write(htmlfile);
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
