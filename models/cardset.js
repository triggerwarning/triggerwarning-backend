module.exports = function(sequelize, DataTypes) {
  return sequelize.define("CardSet", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    vendor: DataTypes.STRING
  })
}