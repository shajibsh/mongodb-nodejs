var express = require('express'),
	app = express();
	
	
	app.get('/', function(req,res) {
		
		res.send ('Hello Express');
	
	});
	
	app.get('*', function(req,res) {
		
		res.send ('Sorry No route defined');
	
	});
	
	
	
	app.listen(8080);
	
	console.log('Express Server started...');