var http = require('http');
var fs = require('fs');
var l = console.log;

var server = http.createServer(function(req, res){
	var path = __dirname + req.url;

	fs.readFile(path, "utf8", function(err, content){
		if (err){
			res.writeHead(404, {"Content-Type": "text/plain"});
			res.end(path + " not found\n");
		} 
		else 
			res.end(content);
	});
});

server.listen(10000);