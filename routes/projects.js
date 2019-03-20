var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Here\'s Our Work', layout: 'portfolio' });
});

router.get('/jeff-grant-technology-influencer', function(req, res, next) {
  res.render('jeff-grant-technology-influencer', { 
    title: 'Magaziney Title.',
    name: 'Jeff Grant',
    jobTitle: 'Videographer, YouTube Influencer',
    caption: 'Jeff Grant on location for a video shoot',
    credit: 'RMM (get info)',
    tag1: 'social media',
    tag2: 'influencer marketing',
    tag3: 'video',
    layout: 'case' 
  });
});

  module.exports = router;