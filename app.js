const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const sassMiddleware = require('node-sass-middleware');
const favicon = require('serve-favicon');
const dotenv = require('dotenv').config();
// unused modules 
const nodemailer = require('nodemailer');
const la = require('@toptensoftware/losangeles');

/* sgMail.setApiKey('sgSG.mmS72HuWRyqiTWGNX11-RA.2qqosUj-b8vktjzDxeVz56BIFWb7-TKYyz9sN_SNR1s'); */

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about')
const usersRouter = require('./routes/users');
const workRouter = require('./routes/work');
const projectsRouter = require('./routes/projects');
const blogRouter = require('./routes/blog');

const app = express();

// Set up db connection - archive - TODO move 

/* 
var mongoDB = 'mongodb://meus:815cricket@ds241723.mlab.com:41723/fuelport';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });

*/

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

// Serve static assets from non-root routes
/* app.use('/', express.static(__dirname + '/public')); */
app.use('/work', express.static(__dirname + '/public'));
app.use('/projects', express.static(__dirname + '/public'));
app.use('/about', express.static(__dirname + '/public'));
// LA plugin
app.use(la.serve({
  contentPath: path.join(__dirname, '/public')
}).middleware);

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/users', usersRouter);
app.use('/work', workRouter);
app.use('/projects', projectsRouter);
app.use('/blog', blogRouter);


/* https://express-validator.github.io/docs/ */

/*
https://www.hacksparrow.com/webdev/express/handling-processing-forms.html

app.post('/handler', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.post('/submit-form', (req, res) => {
  const username = req.body.username
  //...
  res.end()
})

*/

/* 

app.post('/form', [
  check('name').isLength({ min: 3 }),
  check('email').isEmail(),
  check('age').isNumeric()
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  const name  = req.body.name
  const email = req.body.email
  const age   = req.body.age
})

*/

app.post('/submit-form', [
  body('name').isLength({ min: 3 }),
  body('email').isEmail(),
  body('msg').isNumeric()
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  const name  = req.body.name
  const email = req.body.email
  const message   = req.body.msg
})

app.post('/submit-form', function (req, res) {
  //const username = req.body.username
  //...
  console.log(req.body);
  // res.send(req.body); - sends json data
  res.send("Thank you for sending us a message!")
});

/* send grid test 

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'caroline@fuelcopy.com',
  from: 'caroline@fuelcopy.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);

*/

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
  res.render('error', {layout: 'error', bodyClass: 'error', title: 'Error'});
});

module.exports = app;
