const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PriceHistory = sequelize.define('PriceHistory', {
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
  }, {
    tableName: 'pricehistory',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  
  module.exports = PriceHistory;