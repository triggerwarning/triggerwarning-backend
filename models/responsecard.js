module.exports = function(sequelize, DataTypes) {
  return sequelize.define("ResponseCard", {
    text: DataTypes.STRING
  })
}