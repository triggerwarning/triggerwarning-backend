var models = require('../models');

module.exports = function(server) {
	require('./cardset.js')(server);
	require('./promptcard.js')(server);
	require('./responsecard.js')(server);
}