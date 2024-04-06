const Sequelize = require('sequelize');
module.exports = new Sequelize('tineks', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

