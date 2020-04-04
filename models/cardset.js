'use strict';
module.exports = (sequelize, DataTypes) => {
  const CardSet = sequelize.define('CardSet', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    vendor: DataTypes.STRING
  }, {});
  CardSet.associate = function(models) {
    CardSet.hasMany(models.PromptCard);
    CardSet.hasMany(models.ResponseCard);
  };
  return CardSet;
};