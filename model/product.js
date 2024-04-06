const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = sequelize.define('Product', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    Barcode: {
      type: DataTypes.STRING(300),
      defaultValue: null,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Image: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    BrandId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    GroupId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    Model: {
      type: DataTypes.STRING(300),
      defaultValue: null,
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
    tableName: 'products',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  
  module.exports = Product;