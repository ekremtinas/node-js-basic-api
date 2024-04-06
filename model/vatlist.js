const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const VatList = sequelize.define('VatList', {
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
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Percentage: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
  }, {
    tableName: 'vatlist',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.

  
  module.exports = VatList;