var express = require('express');
var app = express();

app.get('/cheer', function(req, res){
  res.end("Its a beautiful day!!");
});

app.get('/jeer', function(req, res){
  res.end("Its a beautiful day!! -U2");
});

app.get('/greeting/:name', function(req, res){
  res.send("How are you " + req.params.name);
});

var server = app.listen(3000, function(){
  console.log('Server 🔥🔥🔥ed up on PORT 3000');
});
