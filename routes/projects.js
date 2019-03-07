var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Here\'s Our Work' });
});

router.get('/health', function(req, res, next) {
  res.render('health', { 
    title: 'Health',
    product1: "health guides",
    product2: "expert Q&As",
    tag1: 'Content Strategy',
    tag2: 'Content Marketing',
    tag3: 'SEO',
    layout: 'case' 
  });
});

  router.get('/marketing', function(req, res, next) {
    res.render('marketing', { title: 'Marketing' });
  });

  module.exports = router;