'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('CardSet', 'promptCards', {
      type: Sequelize.INTEGER,
      references: {
        model: 'PromptCard',
        key: 'id'
      }
    }),
    queryInterface.addColumn('CardSet', 'responseCards', {
      type: Sequelize.INTEGER,
      references: {
        model: 'ResponseCard',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
