// Hello world example for Node.js
// Run 'node hello-world-server' will create a server which listens to port 9000
// and responds to 'Hello world' to any request. For ex, 'curl localhost:9000' will return 
// "hello world"

var http = require('http');

var server = http.createServer(function(req, res){
	res.end("Hello world");
});

server.listen(9000);