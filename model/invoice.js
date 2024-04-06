const {  DataTypes } = require('sequelize');

const sequelize = require('../config/database');
const Customer = require('./customer');
const Transaction = require('./transaction');

const Invoice = sequelize.define('Invoice', {
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
  InvoiceAmount: {
    type: DataTypes.DECIMAL(13, 4),
    allowNull: false,
  },
  BookCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  CustomerId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  InvoiceDate: {
    type: DataTypes.DATE,
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
  tableName: 'invoices',
  timestamps: false,
  charset: 'utf16',
  collate: 'utf16_unicode_ci',
});


Invoice.belongsTo(Customer, { foreignKey: 'CustomerId'  });
Customer.hasMany(Invoice, { foreignKey: 'CustomerId' });
// Şimdi modeli kullanabilirsiniz.
module.exports = Invoice;