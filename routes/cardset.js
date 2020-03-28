var models = require('../models')

module.exports = function(server) {
	server.get('/api/cardset', function(req, res, next) {
		models.CardSet.findAll().then(function(cardsets) {
			res.send(cardsets)
		})
	})

	server.post('/api/cardset', function(req, res, next) {
		models.CardSet.findOrCreate({ name: req.body.name },{
				description: req.body.description,
				vendor: req.body.vendor
			}).success(function(cardset, created) {
			res.send(cardset)
		})
	})
}