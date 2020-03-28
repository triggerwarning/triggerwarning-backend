var models = require('../models')

module.exports = function(server) {
	server.get('/api/cardset', function(req, res, next) {
		models.CardSet.findall().then(function(cardsets) {
			res.send(cardsets)
		})
	})
}