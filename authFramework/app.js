const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const users = require('./routes/users');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');//to enable cookies on the first place and get express to care about them at all
const passport = require('passport');
const mLabURI = require('./config/config').mLabURI;
const cookieKey = require('./config/config').cookieKey;
require('./models/User');//first we have to load model
require('./services/passport');//then load passport

const app = express();

app.use(
  cookieSession({//inside cookie session - configuration object
    maxAge: 30*24*60*60*1000, //I want cookie to last for 30 days
    keys: [cookieKey]
  })
)

//now let's tell passport to use cookies for our authentication
app.use(passport.initialize());//to initialize passport for in Express based application
app.use(passport.session());//enables session support for persistent login

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// .connect has 3 params, the URI, options, and err.
mongoose.connect(mLabURI, { useNewUrlParser: true }, (err)=>{
  if (err) {
    console.log('failed to connect to database', err);
  }else{
    console.log('successfully connected to database');
  } 
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
