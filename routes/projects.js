var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Growth marketing and fund development: Case Studies', bodyClass: 'projects', shortTitle: 'Success stories', description: 'Lessons from our client success stories', layout: 'default' });
  });

  // Social media influencer

  router.get('/social-media-influencer', function(req, res, next) {
    res.render('social-media-influencer', { 
      title: 'Influencer Marketing: YouTube Case Study',
      bodyClass: 'grant-case-study',
      client: 'Aceable',
      team: ['Caroline Leopold', 'Dana Henry'],
      tag: ['social media','influencer marketing','video'],
      url1: "../projects/founder-stories",
      img1: "../images/travel1.svg",
      url2: "../projects/websites",
      img2: "../images/desktop.svg",
      layout: 'case' 
    });
  });

  // PR case study route

router.get('/press-campaign', function(req, res, next) {
    res.render('press-campaign', { 
      title: 'PR and Media Relations: Case Study',
      bodyClass: 'press-case-study',
      summary: 'How a citizens group organized the largest gun violence prevention rally ever in Pennsylvania and was catapulted to the national stage.',
      client: 'CeaseFirePA',
      team: ['David Scholnick'],
      tag: ['strategy', 'public relations', 'earned media'],
      url1: "../projects/social-media-influencer",
      img1: "../images/kaynen-brown.jpg",
      url2: "../projects/websites",
      img2: "../images/desktop.svg",
      layout: 'case' 
    });
  });

  // Founder stories case study route

router.get('/founder-stories', function(req, res, next) {
    res.render('founder-stories', { 
      title: 'Interviews for content marketing: Case study',
      bodyClass: 'founder-case-study',
      description: 'Fuel interviewed dozens of entrepreneurs on how to make a mark in the travel world',
      client: 'RewardExpert',
      team: ['Nick Mordowanec', 'Shawn Farner', 'Caroline Leopold', 'Dana Henry', 
      'Tomas Ponce de Leon'],
      tag: ['content marketing', 'thought leadership', 'seo'],
      url1: "../projects/social-media-influencer",
      img1: "../images/jeff-grant-headshot-crop.jpg",
      url2: "../projects/press-campaign",
      img2: "../images/overhead.jpg",
      layout: 'case' 
    });
  });
  
  // Grants route

router.get('/sbir-grants', function(req, res, next) {
    res.render('sbir-grants', { 
      title: 'SBIR grants: Funds without dilution',
      bodyClass: 'sbir-case-study',
      summary: 'How Fuel helped tech and biotech companies win funding to bring their innovations to market',
      client: 'Various companies',
      team: ['Caroline Leopold', 'Dana Henry', 'Ed Apffel'], 
      tag: ['federal grants', 'sbir', 'biotech'],
      url1: "../projects/social-media-influencer",
      img1: "../images/grant-red-crop.jpg",
      url2: "../projects/press-campaign",
      img2: "../images/overhead.jpg",
      layout: 'case'
    });
  });
  
  // Authority blogging - thought eadership case study
  
  router.get('/thought-leadership', function(req, res, next) {
    res.render('thought-leadership', { 
      title: 'Healthcare content readers can trust',
      summary: '',
      name: 'null',
      jobTitle: 'null',
      caption: 'null',
      credit: 'null',
      client: ['Various brands'],
      tag: ['thought leadership', 'magazine style', 'white papers', 'authority'],
      layout: 'case' 
    });
  });
  
  // Web design case study route
  
  router.get('/websites', function(req, res, next) {
    res.render('websites', { 
      title: 'Usable, useful websites',
      bodyClass: 'website-case-study',
      summary: 'Web design to introduce new companies to discerning audiences',
      team: ['Caroline Leopold', 'Dana Henry', 'Francesca Lo Basso', 'Rich Garella'],
      client: 'Various companies',
      tag: ['web design', 'strategy', 'copywriting', 'seo'],
      url1: "../projects/social-media-influencer",
      img1: "../images/grant-red-crop.jpg",
      url2: "../projects/sbir-grants",
      img2: "../images/biotech-tight.svg",
      layout: 'case', 
    });
  });
      
  module.exports = router;