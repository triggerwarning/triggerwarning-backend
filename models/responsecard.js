'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResponseCard = sequelize.define('ResponseCard', {
    text: DataTypes.STRING
  }, {});
  ResponseCard.associate = function(models) {
    // associations can be defined here
  };
  return ResponseCard;
};