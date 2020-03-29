var models = require('../models');
var ResponseCard = models.ResponseCard;

module.exports = function(server) {
	server.get('/api/responsecard', function(req, res, next) {
		ResponseCard.findAll().then(function(responsecards) {
			res.send(responsecards)
		})
	})

	server.post('/api/responsecard', function(req, res, next) {
		ResponseCard.findOne({ where: { text: req.body.text } }).then(function(responsecard) {
			if (responsecard) {
				res.send(400, { err:'A response card with this text already exists'})
			} else {
				var responsecard = models.ResponseCard.create({
					text: req.body.text,
					draw: req.body.draw,
					pick: req.body.pick
				}).then(function(responsecard) {
					res.send(responsecard)
				})
			}
		})
	})
}