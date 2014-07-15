// Count lines for each files given in argument
// Usage
// node countLineAsync file1 file2 file3 ...

var fs = require('fs');
var arguments = process.argv.slice(2);
var now = new Date();
var remains = arguments.length; 

arguments.forEach(function(element, index, array){
	countLine(element);
});

function countLine(file){
	fs.readFile(file, "utf8", function(err, contents){
		var nbLines = contents.split('\n').length;
		console.log(file + ":" + nbLines);
		remains --;
		if (remains == 0)
			printBenchMark();
	})
}

function printBenchMark(){
	// Benching purpose
	var milliSecs = new Date().getTime() - now;
	console.log("total time:" +  milliSecs + " ms");	
}

