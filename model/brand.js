const {  DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Brand = sequelize.define('Brand', {
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
  CreatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  UpdatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'brands',
  timestamps: false,
  charset: 'utf16',
  collate: 'utf16_unicode_ci',
});

// Şimdi modeli kullanabilirsiniz.

module.exports = Brand;