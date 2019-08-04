var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('work', { title: 'Services | Fuel Copy', bodyClass: 'projects', shortTitle: 'Success stories', description: 'Lessons from our client success stories', layout: 'default' });
});

router.get('/growth-marketing-services', function(req, res, next) {
  res.render('growth-marketing-services', { 
    title: 'Digital Marketing',
    summary: '',
    name: '',
    tag: ['content marketing','influencer marketing','video'],
    layout: 'default' 
  });
});

router.get('/media-relations', function(req, res, next) {
  res.render('media-relations', { 
    title: 'Mass Shootings, No More',
    summary: '',
    tag: ['strategy', 'public relations', 'earned media'],
    layout: 'default' 
  });
});

// Interviews case study route

router.get('/lead-generation-services', function(req, res, next) {
  res.render('lead-generation-services', { 
    title: 'Founder stories on risk, reward and travel',
    summary: 'Fuel interviewed dozens of entrepreneurs on how to make a mark in the travel world',
    name: 'null',
    jobTitle: 'null',
    caption: 'null',
    credit: 'null',
    tag: ['content marketing', 'thought leadership', 'seo'],
    layout: 'default' 
  });
});

// Grants route

router.get('/grant-services', function(req, res, next) {
  res.render('grant-services', { 
    title: 'Win grant awards with federal and SBIR grant proposals',
    summary: 'How Fuel helped tech and biotech companies win funding to bring their innovations to market',
    name: 'null',
    jobTitle: 'null',
    caption: 'null',
    credit: 'null',
    tag: ['grants', 'sbir', 'biotech'],
    layout: 'default' 
  });
});

/* Authority blogging - thought eadership case study

router.get('/thought-leadership', function(req, res, next) {
  res.render('thought-leadership', { 
    title: 'Healthcare content readers can trust',
    summary: 'Growth without dilution: Small business innovation research grants',
    name: 'null',
    jobTitle: 'null',
    caption: 'null',
    credit: 'null',
    tag: ['thought leadership', 'magazine style', 'authority'],
    layout: 'case' 
  });
});

*/

/* Web design case study route

router.get('/web-design', function(req, res, next) {
  res.render('web-design', { 
    title: 'Usable, useful websites',
    summary: 'Web design to introduce new companies to discerning audiences',
    name: 'null',
    jobTitle: 'null',
    caption: 'null',
    credit: 'null',
    tag: ['web design', 'prototyping', 'UI/UX'],
    layout: 'case' 
  });
});

*/



/* CeasefirePA case study - Credit: David Scholnick

router.get('/cease-fire-pa-strategy', function(req, res, next) {
  res.render('cease-fire-pa-strategy'), {
    title: 'Strategy to bring visibility on gun control legislation in Pennsylvania',
    name: 'Shira Goodman',
    jobTitle: 'Executive Director',
    layout: 'case'
  });
});

*/

  module.exports = router;