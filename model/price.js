const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product'); // Product modelini import etmek gerekli

const Price = sequelize.define('Price', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    GrossPrice: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    PurchasePrice: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    NetPrice: {
      type: DataTypes.DECIMAL(13, 4),
      defaultValue: null,
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  }, {
    tableName: 'prices',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  Price.belongsTo(Product, { foreignKey: 'ProductId'  });
  Product.hasMany(Price, { foreignKey: 'ProductId' });

  module.exports = Price;