require('newrelic');
var restify = require('restify')
	, db    = require('./models')
	, restifyPlugins = require('restify-plugins');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
require('./routes')(server)

let port = process.env.PORT
if (port == null || port == "") {
	port = 8080
}

db.sequelize.sync().then(function() {
	server.listen(port, function() {
	  console.log('%s listening at %s', server.name, server.url);
	});
})

server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());