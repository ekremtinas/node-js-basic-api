const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = sequelize.define('User', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    AccountId: {
      type: DataTypes.INTEGER,
    },
    Name: {
      type: DataTypes.STRING(50),
    },
    Email: {
      type: DataTypes.STRING(200),
    },
    Password: {
      type: DataTypes.STRING(300),
    },
    Phone: {
      type: DataTypes.STRING(20),
    },
    Language: {
      type: DataTypes.STRING(2),
    },
    Country: {
      type: DataTypes.STRING(2),
    },
    Address: {
      type: DataTypes.TEXT,
    },
    IsAdmin: {
      type: DataTypes.TINYINT,
    },
    IsConfirm: {
      type: DataTypes.TINYINT,
    },
    IsActive: {
      type: DataTypes.TINYINT,
    },
    CreatedAt: {
      type: DataTypes.DATE,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      
    },
  }, {
    tableName: 'users',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  
  module.exports = User;