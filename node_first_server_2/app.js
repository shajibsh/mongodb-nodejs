
var http = require('http');

var server = http.createServer( function(request,response){
	response.end('Hello from first server');
	
});

server.listen (7000);

console.log('Node server is running on port 7000 ...');