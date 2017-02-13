var express = require('express');
var app = express();

app.get('/cheer', function(req, res){
  res.end("Its a beautiful day!!");
});

app.get('/jeer', function(req, res){
  res.end("Its a beautiful day!! -U2");
});

var server = app.listen(3000, function(){
  console.log('Server 🔥🔥🔥ed up on PORT 3000');
});
