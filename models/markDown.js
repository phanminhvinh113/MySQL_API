"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MarkDown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MarkDown.init(
    {
      doctorId: DataTypes.INTEGER,
      clinicId: DataTypes.INTEGER,
      specialtyid: DataTypes.INTEGER,
      contentHTML: DataTypes.TEXT,
      contentMarkdown: DataTypes.TEXT,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MarkDown",
    }
  );
  return MarkDown;
};
