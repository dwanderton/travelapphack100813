var exec = require("child_process").exec;
var fs = require('fs');
var request = require('request');
var assert = require('assert')

var pearsonapikeyappend = "&apikey=6400efb9c1d7e64df6407a6d58bd2f00";
var pearsonbegin = "http://api.pearson.com/v2/travel/"

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
    var requrl = pearsonbegin + "tt_london/places?category=Nightlife" +pearsonapikeyappend;
    
    var r = request(requrl, function (e, resp) {
	assert.equal(JSON.parse(JSON.stringify(r)).response.statusCode, 200);
	console.log(JSON.parse(JSON.stringify(r)).response.body);
    });
    var body = '<html>hello</html>';
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(body);
    response.end();

}

exports.london = london;
exports.newyork = newyork;
