var exec = require("child_process").exec;

function london(){
    console.log("Request handler 'london' was called.");
    var content = "empty";
    
    exec("ls -lah",function(error, stout, sterr){
	content = stout;
	});
    return content;

}

function newyork() {
    console.log("Request handler 'newyork' was called.");
    return "hello nyc";
}

exports.london = london;
exports.newyork = newyork;
