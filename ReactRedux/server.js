var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');
var app = express();
var compiler = webpack(config);

config.plugins.push(new webpack.HotModuleReplacementPlugin());

//Middleware
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
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