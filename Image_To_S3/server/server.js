const express = require('express');
const app = express();
const path = require('path');//our passport auth module
const bodyParser = require('body-parser');
const router = require('./router/router');//loading router from routes folder
const port = 3000;//port that server is listening on
require('dotenv').config();//dotenv package would allow us to use credentials from .env package
// const router = require('./router/router');//loading router from routes folder

// middleware(automatically used for every request that comes into our application)
app.use(express.static(__dirname + '/public')); //dirname here refers to root folder where app lives
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);//must tell to node to use router(we are loading on top) instead of app for routing
app.use(router);//must tell to node to use router(we are loading on top) instead of app for routing
// let's setup the view engine and directory for templates
app.set('views', path.join(__dirname, 'views'));

app.listen(port, (error)=>{
    (!error) ? console.log('listening on port ', port) : console.log('something  went wrong')
})
