var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Here\'s Our Work', layout: 'portfolio' });
});

router.get('/jeff-grant-influencer', function(req, res, next) {
  res.render('jeff-grant-influencer', { 
    title: 'Magaziney Title.',
    name: 'Jeff Grant',
    jobTitle: 'Videographer, YouTube Influencer',
    caption: 'Jeff Grant on location for a video shoot',
    layout: 'case' 
  });
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

  module.exports = router;