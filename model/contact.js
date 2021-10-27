const  Sequelize= require('sequelize');
const sequelize = require('../config/database');

const Contact = sequelize.define('contact', {
    name:Sequelize.TEXT,
    email:Sequelize.TEXT,
    subject:Sequelize.TEXT,
    message:Sequelize.TEXT,
},
{
    tableName: 'contact',
    freezeTableName: true
});


module.exports=  Contact;