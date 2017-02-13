### Introduction To Node

Learning node by doing, and keeping track of it with github

----
#### First Commit
Using the node module `http`, to create a very simple node server. Run `node server.js` to start a server on port 3000.
```
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello world!')
}).listen(3000);

console.log("Server is listening on PORT 3000");
```
__and then we committed our code__

`git add -A`

`git commit -m "configured basic server using HTTP"`

`git push origin master`

----
