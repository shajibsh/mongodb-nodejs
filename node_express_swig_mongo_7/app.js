var express = require('express'),
	cons = require('consolidate'),
	app = express(),
	MongoClient = require('mongodb').MongoClient,
	Server = require('mongodb').Server;
	
	app.engine('html',cons.swig);
	app.set('view engine', 'html');
	app.set('views', __dirname+'/views');
	
	var mongoclient = new MongoClient (new Server ('localhost',27017,{'native_parser':true}));
	var db =  mongoclient.db('test');
	
	
	app.get('/', function(req,res) {
		db.collection('mycoll').findOne({}, function(err,doc){
		
		if(err) throw err;
		
		res.render ('hello', doc);
			
		})
		
	});
	
	app.get('*', function(req,res) {
		
		res.send ('Sorry No route defined');
	
	});
	
	mongoclient.open(function (err,mongoclient){
	if(err) throw err;
	
	app.listen(8080);
	
	console.log('Express Server started...');
	
	})
	
	