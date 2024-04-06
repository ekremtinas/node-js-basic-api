const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Invoice = require('./invoice');
const Transaction = sequelize.define('Transaction', {
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
    CustomerId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    ProductId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProductName: {
      type: DataTypes.STRING(200),
      defaultValue: null,
    },
    Description: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    VAT: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
      defaultValue: 0.0000,
    },
    VATCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    LedgerCode: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      comment: '760 Muhasebe Satış Kodu',
    },
    Quantity: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    GrossPrice: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    PurchasePrice: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    NetPrice: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    CashRegisterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: 'transactions',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  Transaction.belongsTo(Invoice, { foreignKey: 'InvoiceId'  });
  Invoice.hasMany(Transaction, { foreignKey: 'InvoiceId' });
  module.exports = Transaction;