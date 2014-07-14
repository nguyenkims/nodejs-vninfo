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
	var reminder = {text:req.body.text, time:req.body.time};
	l(reminder);
	reminders.push(reminder);
	res.json(reminders);
});


l("Listening to 8080 ...");
app.listen(8080);
