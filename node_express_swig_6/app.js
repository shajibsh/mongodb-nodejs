var express = require('express'),
	cons = require('consolidate'),
	app = express();
	
	app.engine('html',cons.swig);
	app.set('view engine', 'html');
	app.set('views', __dirname+'/views');
	
	
	app.get('/', function(req,res) {
		
		res.render ('hello', {'name':'Farrukh'});
	
	});
	
	app.get('*', function(req,res) {
		
		res.send ('Sorry No route defined');
	
	});
	
	
	
	app.listen(8080);
	
	console.log('Express Server started...');