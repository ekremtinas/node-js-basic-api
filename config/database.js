const Sequelize = require('sequelize');
module.exports = new Sequelize('mysite', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

