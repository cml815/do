var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Case studies of marketing and fundraising success', bodyClass: 'projects', shortTitle: 'Success stories', description: 'Lessons from our client success stories', layout: 'default' });
  });

  router.get('/social-media-influencer', function(req, res, next) {
    res.render('social-media-influencer', { 
      title: 'Small Channels, Mighty Influence',
      bodyClass: 'grant-case-study',
      tag: ['social media','influencer marketing','video'],
      layout: 'default' 
    });
  });

  // PR case study route

router.get('/press-campaign', function(req, res, next) {
    res.render('press-campaign', { 
      title: 'Mass Shootings, No More',
      bodyClass: 'press-case-study',
      summary: 'How a citizens group organized the largest gun violence prevention rally ever in Pennsylvania and was catapulted to the national stage.',
      name: 'David Scholnick',
      jobTitle: 'Videographer, YouTube Influencer',
      caption: '',
      credit: 'RMM (get info)',
      tag: ['strategy', 'public relations', 'earned media'],
      layout: 'default' 
    });
  });

  // Interviews case study route

router.get('/founder-stories', function(req, res, next) {
    res.render('founder-stories', { 
      title: 'Founder stories on risk, reward and travel',
      bodyClass: 'founder-case-study',
      description: 'Fuel interviewed dozens of entrepreneurs on how to make a mark in the travel world',
      name: 'null',
      jobTitle: 'null',
      caption: 'null',
      credit: 'null',
      tag: ['content marketing', 'thought leadership', 'seo'],
      layout: 'default' 
    });
  });

  // Grants route

router.get('/sbir-grants', function(req, res, next) {
    res.render('sbir-grants', { 
      title: 'Growth without dilution: Small business innovation research grants',
      bodyClass: 'sbir-case-study',
      summary: 'How Fuel helped tech and biotech companies win funding to bring their innovations to market',
      name: 'null',
      jobTitle: 'null',
      caption: 'null',
      credit: 'null',
      tag: ['grants', 'sbir', 'biotech'],
      layout: 'default' 
    });
  });
  
  // Authority blogging - thought eadership case study
  
  router.get('/thought-leadership', function(req, res, next) {
    res.render('thought-leadership', { 
      title: 'Healthcare content readers can trust',
      summary: 'Growth without dilution: Small business innovation research grants',
      name: 'null',
      jobTitle: 'null',
      caption: 'null',
      credit: 'null',
      tag: ['thought leadership', 'magazine style', 'authority'],
      layout: 'default' 
    });
  });
  
  // Web design case study route
  
  router.get('/web-design', function(req, res, next) {
    res.render('web-design', { 
      title: 'Usable, useful websites',
      bodyClass: 'website-case-study',
      summary: 'Web design to introduce new companies to discerning audiences',
      name: 'null',
      jobTitle: 'null',
      caption: 'null',
      credit: 'null',
      tag: ['web design', 'prototyping', 'UI/UX'],
      layout: 'default' 
    });
  });
  
  router.get('/websites', function(req, res, next) {
    res.render('websites', { 
      title: 'Usable, useful websites',
      bodyClass: 'website-case-study',
      summary: 'Web design to introduce new companies to discerning audiences',
      name: 'null',
      jobTitle: 'null',
      caption: 'null',
      credit: 'null',
      tag: ['web design', 'web copywriting','prototyping', 'UI/UX'],
      layout: 'default' 
    });
  });
  
  
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