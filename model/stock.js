const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Stock = sequelize.define('Stock', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CurrentStock: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    MinimumStock: {
      type: DataTypes.DECIMAL(13, 4),
      defaultValue: null,
    },
    MaximumStock: {
      type: DataTypes.DECIMAL(13, 4),
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
    tableName: 'stock',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  
  module.exports = Stock;