const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ProductGroup = sequelize.define('ProductGroup', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    GroupName: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    Percentage: {
      type: DataTypes.DECIMAL(13, 4),
      defaultValue: null,
    },
    C1: {
      type: DataTypes.DECIMAL(13, 4),
      defaultValue: null,
    },
    C2: {
      type: DataTypes.DECIMAL(13, 4),
      defaultValue: null,
    },
    C3: {
      type: DataTypes.DECIMAL(13, 4),
      defaultValue: null,
    },
    C4: {
      type: DataTypes.DECIMAL(13, 4),
      defaultValue: null,
    },
    C5: {
      type: DataTypes.DECIMAL(13, 4),
      defaultValue: null,
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
    tableName: 'productgroups',
    timestamps: false,
    charset: 'utf16',
    collate: 'utf16_unicode_ci',
  });
  
  // Şimdi modeli kullanabilirsiniz.
  
  module.exports = ProductGroup;