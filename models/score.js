"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      score.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  score.init(
    {
      score: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "score",
    }
  );
  return score;
};
