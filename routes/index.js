var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* Redirect home page.
router.get('/', function(req, res) {
  res.redirect('/projects');
});

*/

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});


/* 
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio - Fuck Me' });
});

*/

/* GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

*/

router.get('/tester', function(req, res) {
  // Below I'm passing in a JSON object (or hash table of keys and values, which is similar to an associative array) 
  // as a 2nd parameter to the "tester.handlebars" template
  res.render('tester', {
      first_name: "Donald",
      last_name: "Duck",
      now: new Date(),
      random_num: Math.round(Math.random() * 10)
  });
});


module.exports = router;
