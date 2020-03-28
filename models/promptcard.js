module.exports = function(sequelize, DataTypes) {
  return sequelize.define("PromptCard", {
    text: DataTypes.STRING,
    draw: { type: DataTypes.INTEGER, default: 0 },
    pick: { type: DataTypes.INTEGER, default: 1 }
  })
}