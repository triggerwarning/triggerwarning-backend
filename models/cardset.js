'use strict';
module.exports = (sequelize, DataTypes) => {
  const CardSet = sequelize.define('CardSet', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    vendor: DataTypes.STRING
  }, {});
  CardSet.associate = function(models) {
    // associations can be defined here
  };
  return CardSet;
};