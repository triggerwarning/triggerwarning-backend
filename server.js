var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

let port = process.env.PORT
if (port == null || port == "") {
	port = 8080
}

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});