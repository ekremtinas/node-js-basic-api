const {  DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const CashRegister = sequelize.define('CashRegister', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  AccountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'cashregisters',
  timestamps: false,
  charset: 'utf16',
  collate: 'utf16_unicode_ci',
});

// Şimdi modeli kullanabilirsiniz.

module.exports = CashRegister;