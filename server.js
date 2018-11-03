var http = require('http'); //importing website module, like we are import packages

function onRequest(request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.write('Hello World');
   response.end();
}

http.createServer(onRequest).listen(8000);
