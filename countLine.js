// Count lines for each files given in argument
// Usage
// node countLine file1 file2 file3 ...

var fs = require('fs');
var arguments = process.argv.slice(2);
var now = new Date();

arguments.forEach(function(element, index, array){
	console.log(element + ":" + countLineSynchro(element));
});

// Benching purpose
var milliSecs = new Date().getTime() - now;
console.log("total time:" +  milliSecs + " ms");

function countLineSynchro(file){	
	var contents = fs.readFileSync(file, "utf8");
	return contents.split('\n').length;
}
