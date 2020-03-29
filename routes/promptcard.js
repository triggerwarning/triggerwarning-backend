var models = require('../models');
var PromptCard = models.PromptCard;

module.exports = function(server) {
	server.get('/api/promptcard', function(req, res, next) {
		PromptCard.findAll().then(function(promptcards) {
			res.send(promptcards)
		})
	})

	server.post('/api/promptcard', function(req, res, next) {
		PromptCard.findOne({ where: { text: req.body.text } }).then(function(promptcard) {
			if (promptcard) {
				res.send(400, { err:'A prompt card with this text already exists'})
			} else {
				var promptcard = models.PromptCard.create({
					text: req.body.text,
					draw: req.body.draw || 0,
					pick: req.body.pick || 1
				}).then(function(promptcard) {
					res.send(promptcard)
				})
			}
		})
	})
}