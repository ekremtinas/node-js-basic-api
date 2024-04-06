const sequelize = require('../config/database');
const  {DataTypes}= require('sequelize');
const Accounts = sequelize.define('Accounts', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    Language: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    Country: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    IsConfirm: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'accounts',
    timestamps: false, // Eğer zaman damgalarını kullanmak istemiyorsanız false olarak ayarlayabilirsiniz.
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  
  module.exports = Accounts;