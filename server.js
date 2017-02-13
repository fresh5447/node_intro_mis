var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello world!')
}).listen(3000);

console.log("Server is listening on PORT 3000");
