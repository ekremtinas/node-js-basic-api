const {  DataTypes } = require('sequelize');

const sequelize = require('../config/database');
const Customer = sequelize.define('Customer', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  AccountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Surname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Nickname: {
    type: DataTypes.STRING(100),
    defaultValue: null,
  },
  Phone: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING(300),
    defaultValue: null,
  },
  Address: {
    type: DataTypes.TEXT,
    defaultValue: null,
  },
  Description: {
    type: DataTypes.TEXT,
    defaultValue: null,
  },
  CustomerType: {
    type: DataTypes.STRING(2),
    defaultValue: null,
  },
}, {
  tableName: 'customers',
  timestamps: false,
  charset: 'utf16',
  collate: 'utf16_unicode_ci',
});



module.exports = Customer;
