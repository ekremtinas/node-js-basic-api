const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PaymentHistory = sequelize.define('PaymentHistory', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    InvoiceNumber: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    BookCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PaymentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PaymentAmount: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'paymenthistory',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  
  module.exports = PaymentHistory;