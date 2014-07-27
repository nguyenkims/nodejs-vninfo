// A 'mirror' chat server, i.e. a server responding exactly what it receives
// Run 'node echoChat' to start this server
// Then, in another console, 'telnet localhost 8888' 
// to connect to this server and have fun !

var net = require('net');

var server = net.createServer(function(socket){
	socket.write('hi you\n');
	socket.on('data', function(d){
		socket.write(d);
	});
});

server.listen(8888);