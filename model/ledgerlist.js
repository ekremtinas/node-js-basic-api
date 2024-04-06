const {  DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const LedgerList = sequelize.define('LedgerList', {
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
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    VATCode: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
  }, {
    tableName: 'ledgerlist',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  
  module.exports = LedgerList;