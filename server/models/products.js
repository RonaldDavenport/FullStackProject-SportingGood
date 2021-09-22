'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Products.init({
    Name: DataTypes.STRING,
    Price: DataTypes.FLOAT,
    Imageurl: DataTypes.STRING,
    Category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};