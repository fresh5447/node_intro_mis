var express = require('express');
var app = express();

app.get('/howdy', function(req, res){
  res.end("We made it!");
});

var server = app.listen(3000, function(){
  console.log('Server 🔥🔥🔥ed up on PORT 3000');
});
