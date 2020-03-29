'use strict';
module.exports = (sequelize, DataTypes) => {
  const PromptCard = sequelize.define('PromptCard', {
    text: DataTypes.STRING,
    draw: DataTypes.INTEGER,
    pick: DataTypes.INTEGER
  }, {});
  PromptCard.associate = function(models) {
    // associations can be defined here
  };
  return PromptCard;
};