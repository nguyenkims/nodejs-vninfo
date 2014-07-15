var express = require('express');
var app = express();
var reminders = [];
var l = console.log;

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public')); 

app.get('/api/reminder/list', function(req, res){
	res.json(reminders);
})

app.post('/api/reminder/create', function(req, res){
	var reminder = {text:req.body.text, time:req.body.time, mail:req.body.mail};
	l(reminder);
	programSend(reminder);
	reminders.push(reminder);
	res.json(reminders);
});

var send = require('./sendMail').send;
function programSend(reminder){
	var delay = new Date(reminder.time).getTime() - new Date().getTime();
	l(reminder + "  will be sent in " + delay/ (60*1000) + " minutes");
	setTimeout(function(){
		send(reminder.mail, reminder.text, reminder.time)
	}, delay);
}

l("Listening to 8080 ...");
app.listen(8080);
