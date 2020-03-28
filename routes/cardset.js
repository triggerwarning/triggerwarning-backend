var models = require('../models');
var CardSet = models.CardSet;

module.exports = function(server) {
	server.get('/api/cardset', function(req, res, next) {
		CardSet.findAll().then(function(cardsets) {
			res.send(cardsets)
		})
	})

	server.post('/api/cardset', function(req, res, next) {
		CardSet.findOne({ where: { name: req.body.name } }).then(function(cardset) {
			if (cardset) {
				res.send(400, { err:'A cardset with this name already exists, please change the name or edit the existing cardset'})
			} else {
				var cardset = models.CardSet.create({
					name: req.body.name,
					description: req.body.description,
					vendor: req.body.vendor
				}).then(function(cardset) {
					res.send(cardset)
				})
			}
		})
	})
}