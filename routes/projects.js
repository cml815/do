var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Here\'s Our Work' });
});

router.get('/health', function(req, res, next) {
  res.render('health', { 
    title: 'Relatable Content for Household Health Brands',
    industry: 'healthcare',
    tag1: 'content strategy',
    tag2: 'content marketing',
    tag3: 'SEO',
    layout: 'case' 
  });
});

router.get('/lead-generation', function(req, res, next) {
  res.render('lead-generation', { 
    title: 'Lead Generation for a High Competition Market',
    product1: "white papers",
    product2: "research",
    tag1: 'content strategy',
    tag2: 'white papers',
    tag3: 'lead generation',
    layout: 'grid' 
  });
});




  router.get('/marketing', function(req, res, next) {
    res.render('marketing', { title: 'Marketing' });
  });

  module.exports = router;