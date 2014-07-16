// First, install express
// npm install express
var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.get("*", function(req, res){
	res.redirect("/chat.js");
});

app.listen(11000);