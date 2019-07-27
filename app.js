var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');
var sassMiddleware = require('node-sass-middleware');
var favicon = require('serve-favicon');
var nodemailer = require('nodemailer');
var dotenv = require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');

var app = express();

// Set up db connection - archive - TODO move   
var mongoDB = 'mongodb://meus:815cricket@ds241723.mlab.com:41723/fuelport';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// register helpers
var hbs = exphbs.create({
  helpers: {
      now: function (now) {
        return new Date(now);
      },
      sayHello: function () { alert("Hello World") },
      getStringifiedJson: function (value) {
          return JSON.stringify(value);
      },
      random_num: function () { Math.round(Math.random() * 10)}
  },
  defaultLayout: 'main',
  partialsDir: ['views/partials/']
});

// Register Handlebars view engine
app.engine('.hbs', exphbs({defaultLayout: 'default', extname: '.hbs'}));
// Use Handlebars view engine
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // false = querystring and true = qs libs
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {layout: 'error'});
});

module.exports = app;
