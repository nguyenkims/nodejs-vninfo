// Same as static-server but this time, use 'express' module instead.
// To run this example, you need to install express by typing:
// 'npm install express'

var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.get("*", function(req, res){
	res.redirect("/chat.js");
});

app.listen(11000);