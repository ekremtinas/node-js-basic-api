const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Invoice = require('./invoice');

const Payment = sequelize.define('Payment', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    InvoiceId: {
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
    TotalAmount: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    PaidAmount: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    UnpaidAmount: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  }, {
    tableName: 'payments',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  Payment.belongsTo(Invoice, { foreignKey: 'InvoiceId'  });
  Invoice.hasMany(Payment, { foreignKey: 'InvoiceId' });
  module.exports = Payment;