var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('work', { title: 'How Fuel Helps | Marketing and Fundraising Services', bodyClass: 'work', shortTitle: 'what we do', description: 'Lessons from our client success stories', layout: 'default' });
});

router.get('/growth-marketing', function(req, res, next) {
  res.render('growth-marketing', { 
    title: 'Content strategy and copywriting to grow online',
    description: 'Fuel growth with web design, content marketing and seo',
    bodyClass: 'growth-marketing',
    shortTitle: 'growth marketing',
    summary: '',
    name: '',
    tag: ['content marketing','influencer marketing','video', 'seo'],
    layout: 'default' 
  });
});

// Grants route

router.get('/grant-writing', function(req, res, next) {
  res.render('grant-writing', { 
    title: 'Win SBIR Grants and Contracts',
    description: 'Fuel helps companies win funding to bring tech innovations to market',
    bodyClass: 'grants',
    shortTitle: 'Fundraising',
    jobTitle: 'null',
    caption: 'null',
    credit: 'null',
    tag: ['grants', 'contracts', 'procurement', 'sbir', 'biotech'],
    layout: 'default' 
  });
});

  module.exports = router;