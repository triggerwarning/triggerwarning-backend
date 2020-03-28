var models = require('../models')

module.exports = function(server) {
	server.get('/api/cardset', function(req, res, next) {
		models.CardSet.findAll().then(function(cardsets) {
			res.send(cardsets)
		})
	})
}