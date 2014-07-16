var net = require('net');

var socketList = [];
var server = net.createServer(function(socket){
	socketList.push(socket);
	socket.write('Welcome \n');

	socket.on('data', function(d){
		for (var i = socketList.length - 1; i >= 0; i--) {
			socketList[i].write(d);
		};
	});
});

server.listen(8888);