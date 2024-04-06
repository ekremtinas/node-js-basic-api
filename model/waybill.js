const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Waybill = sequelize.define('Waybill', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    WaybillNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    WaybillAmount: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    TransactionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    BookCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'waybills',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  
  module.exports = Waybill;