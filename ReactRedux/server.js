var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hai from server');
});

app.listen('3000', function(err){
	if(err)
		console.log(err);
	else
		console.log('connected...');
});