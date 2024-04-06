const express = require('express');
const app=express();
const bodyParser = require("body-parser");
const db = require('./config/database');
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.urlencoded({  extended:true})); 
app.use(cors());


require('./router/routerManager')(app);

//Database

db.authenticate()
.then(()=> console.log(' Database connected...'))
.catch(err => console.log ('error: ' +err))

/*app.listen(process.env.PORT,()=>{
    console.log('Listening on port ' + process.env.PORT);
});*/

module.exports=app;
