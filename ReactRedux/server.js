var express = require('express');
var path = require('path');
var app = express();

//Middleware
app.use(express.static('./dist'));

app.get('/', function(req, res){
	res.sendFile(path.resolve('client/index.html'));
});

app.listen('3000', function(err){
	if(err)
		console.log(err);
	else
		console.log('connected...');
});