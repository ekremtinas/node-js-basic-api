const express = require('express');
const app=express();
const path=require('path');
const bodyParser = require("body-parser");
const db = require('./config/database');



app.use(bodyParser.urlencoded({     extended:true})); 


require('./router/routerManager')(app);

//Database

db.authenticate()
.then(()=> console.log(' Database connected...'))
.catch(err => console.log ('error: ' +err))

app.listen(5500);
