const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const StockLog = sequelize.define('StockLog', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserId: {
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
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'stocklog',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  
  module.exports = StockLog;