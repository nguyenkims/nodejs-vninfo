var net = require('net');

var server = net.createServer(function(socket){
	socket.write('hi you\n');
	socket.on('data', function(d){
		socket.write(d);
	});
});

server.listen(8888);