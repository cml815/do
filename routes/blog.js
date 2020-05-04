var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('blog', { title: 'Blog on advice to market and win grant funding for health or biotech project', bodyClass: 'blog', shortTitle: 'Blog', description: 'Lessons in growth and success', layout: 'blog' });
  });

  // Coronavirus champions

  router.get('/coronavirus-champions', function(req, res, next) {
    res.render('blog/coronavirus-champions', { 
      title: 'Test title - fix descript',
      description: 'Fuel connected YouTube influencers with an online brand for young adults. Learn how to benefit from influencers.', 
      bodyClass: 'cs-influencer',
      client: 'Aceable',
      author: 'Caroline Leopold',
      date: 'April 7, 2020',
      tag: ['pandemic','public health','biotech'],
      url1: "../blog/coronavirus-champions",
      img1: "../images/travel1.svg",
      url2: "../projects/websites",
      img2: "../images/desktop.svg",
      layout: 'blog'
    });
  });

  router.get('/simple-sbir-guide', function(req, res, next) {
    res.render('blog/simple-sbir-guide', { 
      title: 'A Simple SBIR Grants Guide',
      description: 'A simple guide to SBIR grants guide. What you need to know about small business innovation research grants ', 
      bodyClass: '',
      author: 'Caroline Leopold',
      date: 'May 5, 2020',
      tag: ['grants','small business','SBIR'],
      url1: "../blog/simple-sbir-guide",
      img1: "../images/nci-cells.jpg",
      layout: 'blog'
    });
  });


  router.get('/blog-test', function(req, res, next) {
    res.render('blog/blog-test', { 
      title: 'Test title - fix descript',
      description: 'Fuel connected YouTube influencers with an online brand for young adults. Learn how to benefit from influencers.', 
      bodyClass: 'cs-influencer',
      client: 'Aceable',
      author: 'Caroline Leopold',
      date: 'April 7, 2020',
      tag: ['pandemic','public health','biotech'],
      url1: "../blog/coronavirus-champions",
      img1: "../images/travel1.svg",
      url2: "../projects/websites",
      img2: "../images/desktop.svg",
      layout: 'case', 
    });
  });


  /*

  var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Growth marketing and fund development: Case Studies', bodyClass: 'projects', shortTitle: 'Success stories', description: 'Lessons from our client success stories', layout: 'default' });
  });

  // Social media influencer

  router.get('/social-media-influencer', function(req, res, next) {
    res.render('social-media-influencer', { 
      title: 'Influencer Marketing: YouTube Case Study',
      description: 'Fuel connected YouTube influencers with an online brand for young adults. Learn how to benefit from influencers.', 
      bodyClass: 'cs-influencer',
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
      description: 'Read the story we generated media for a large event. Learn how you can get PR for your company or brand.',
      bodyClass: 'cs-press',
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
      bodyClass: 'cs-founder',
      description: 'Read how Fuel interviewed startup founders for a content marketing campaign. Grow organic reach; build your brand',
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
      description: 'Read case study on non-dilutive business grants. See how small business innovation research (SBIR) helps with R&D',
      bodyClass: 'cs-sbir',
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
  
  // Web design case study route
  
  router.get('/websites', function(req, res, next) {
    res.render('websites', { 
      title: 'Usable, useful websites',
      description: 'Read story how our web design and copywriting services help solo entrepreneurs and small companies. ',
      bodyClass: 'cs-website',
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

  // Social marketing grant 

  router.get('/social-marketing-grant', function(req, res, next) {
    res.render('social-marketing-grant', { 
      title: 'Social marketing to save lives',
      bodyClass: 'cs-grant',
      description: 'Read the story of how we helped design a social marketing for a funded grant proposal. Get help for federal grants in health',
      client: 'National Hemophilia Foundation',
      team: 'Caroline Leopold', 
      tag: ['grant writing', 'project development', 'social marketing'],
      url1: "../projects/social-media-influencer",
      img1: "../images/jeff-grant-headshot-crop.jpg",
      url2: "../projects/press-campaign",
      img2: "../images/overhead.jpg",
      layout: 'case' 
    });
  });
      
  module.exports = router;




  // PR case study route

router.get('/press-campaign', function(req, res, next) {
    res.render('press-campaign', { 
      title: 'PR and Media Relations: Case Study',
      description: 'Read the story we generated media for a large event. Learn how you can get PR for your company or brand.',
      bodyClass: 'cs-press',
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
      bodyClass: 'cs-founder',
      description: 'Read how Fuel interviewed startup founders for a content marketing campaign. Grow organic reach; build your brand',
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
      description: 'Read case study on non-dilutive business grants. See how small business innovation research (SBIR) helps with R&D',
      bodyClass: 'cs-sbir',
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
  
  // Web design case study route
  
  router.get('/websites', function(req, res, next) {
    res.render('websites', { 
      title: 'Usable, useful websites',
      description: 'Read story how our web design and copywriting services help solo entrepreneurs and small companies. ',
      bodyClass: 'cs-website',
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

  // Social marketing grant 

  router.get('/social-marketing-grant', function(req, res, next) {
    res.render('social-marketing-grant', { 
      title: 'Social marketing to save lives',
      bodyClass: 'cs-grant',
      description: 'Read the story of how we helped design a social marketing for a funded grant proposal. Get help for federal grants in health',
      client: 'National Hemophilia Foundation',
      team: 'Caroline Leopold', 
      tag: ['grant writing', 'project development', 'social marketing'],
      url1: "../projects/social-media-influencer",
      img1: "../images/jeff-grant-headshot-crop.jpg",
      url2: "../projects/press-campaign",
      img2: "../images/overhead.jpg",
      layout: 'case' 
    });
  });
      
  */ 

  module.exports = router;