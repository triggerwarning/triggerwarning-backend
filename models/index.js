if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      logging:  true //false
    })
  } else {
    sequelize = new Sequelize('triggerwarning-db', 'root', null)
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User:      sequelize.import(__dirname + '/user'),
    PromptCard: sequelize.import(__dirname + '/promptcard'),
    ResponseCard: sequelize.import(__dirname + '/responsecard')
  }
}

module.exports = global.db