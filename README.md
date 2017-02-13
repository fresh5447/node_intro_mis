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
#### Second Commit
We are making our project a node project by adding a `package.json` file.

Run command `npm init` to create the JSON file.

Next, we installed the NPM package `express`

Run command `npm install --save express`

*the dash dash save, writes express to our package.json*

1) Imported express and used the constructor to make our app.
2) Defined an endpoint `howdy`, which gives a response of some text.
3) Created a server on PORT 3000

```
var express = require('express');
var app = express();

app.get('/howdy', function(req, res){
  res.end("We made it!");
});

var server = app.listen(3000, function(){
  console.log('Server 🔥🔥🔥ed up on PORT 3000');
});
```
then we committed our code

`git add -A`

`git commit -m "Add package.json, user express to configure our server"`

`git push origin master`

----
