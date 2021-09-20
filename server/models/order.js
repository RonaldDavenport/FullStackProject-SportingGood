'use strict';
const {
  Model
} = require('sequelize');
const products = require('./products');
const users = require('./users');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models)
     {
      // define association here
     Order.belongsTo(users)
     Order.hasMany(products)
    }
  };
  Order.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};