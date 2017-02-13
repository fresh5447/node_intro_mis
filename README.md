## Introduction To Node

Learning node by doing, and keeping track of it with github

----
### First Commit: HTTP
Using the node module `http`, to create a very simple node server. Run `node server.js` to start a server on port 3000.
```js
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
### Second Commit: Express
We are making our project a node project by adding a `package.json` file.

Run command `npm init` to create the JSON file.

Next, we installed the NPM package `express`

Run command `npm install --save express`

*the dash dash save, writes express to our package.json*

1) Imported express and used the constructor to make our app.

2) Defined an endpoint `howdy`, which gives a response of some text.

3) Created a server on PORT 3000

```js
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
### Third Commit: Nodemon
Up until now we have to kill our server, and restart our server to see our new changes in our code. We can use a tool called `nodemon`, that will make this process much easier.

`sudo npm install -g nodemon`

*the dash g flag tells NPM to install nodemon globally on our computer. Meaning it is not specific to this project. When install things globally, it's a pretty big deal, we need to prefix the command with sudo*

Now we can start our serve with `nodemon` and our server will automatically restart every time we save our codebase.

`nodemon server.js`

1) Make two new endpoints, one that serves a sad response, and one that serves a happy response.

```js
app.get('/cheer', function(req, res){
  res.end("Its a beautiful day!!");
});

app.get('/jeer', function(req, res){
  res.end("Its a beautiful day!! -U2");
});
```
2) Commit your code.
**we will no longer detail the steps for a commit**

----
### Fourth Commit: Params

We can create functions that can take a parameter, and do something with that value:
```js
function greeting(name) {
  return "Hello " + name
}
```
We have this same ability when we define API endpoints
Add this endpoint to `server.js`, and pass in a value for the name param.

```js
app.get('/greeting/:name', function(req, res){
  res.send("How are you " + req.params.name);
});
```


----

### Fifth Commit: `req.body`

If you have ever been on a website and filled out a form, when you hit the 'submit' button, you are actually submitting data to the server. This data or information, gets submitted to the server in an object req.body

In the following example, we are going to create an endpoint to simulate a user login form. The information being submitted to the server will be name, and password. aka `req.body.name` && `req.body.password`

but first...

__Postman__ is a tool that enables us to easily test our APIs, for our example it will enable us to test the functionality of a form being submitted, without actually having to create the UI for the form.


1) Create the login API endpoint. This will be a `POST` method since we are sending data to the server.

```js
app.post('/login', function(req, res) {
  var name = req.body.name;
  var password = req.body.password;
  var user = { name: name, password: password };
  res.json(user);
});
```

2) Install 'body-parser' (allows our form to submit data)

`npm install --save body-parser`

require it in your `server.js`

`var bodyParser = require('body-parser')`

configure your application to use it

```js
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
```

3) Make make sure your server is running.

`nodmon server.js`

4) Head to Postman to test your endpoint `localhost:3000/login` (dont forget to select x-www-form-urlencoded)
