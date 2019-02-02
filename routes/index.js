var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Find me in index.js route' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/work', function(req, res, next) {
  res.render('work', { title: 'Work' });
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

module.exports = router;
