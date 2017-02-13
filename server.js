var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/cheer', function(req, res){
  res.end("Its a beautiful day!!");
});

app.get('/jeer', function(req, res){
  res.end("Its a beautiful day!! -U2");
});

app.get('/greeting/:name', function(req, res){
  res.send("How are you " + req.params.name);
});

app.post('/login', function(req, res) {
  var name = req.body.name;
  var password = req.body.password;
  var user = { name: name, password: password };
  res.json(user);
});

var server = app.listen(3000, function(){
  console.log('Server 🔥🔥🔥ed up on PORT 3000');
});
