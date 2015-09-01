var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', function(err,db) {

	if(err) throw err;
	
	db.collection ('mycoll').findOne({name:"Farrukh"}, function(err, doc) {
		if(err) throw err;
		
		console.log (doc);
		
		db.close();
		
	
	});
	
	console.log ('Doc listed...');
	
})

