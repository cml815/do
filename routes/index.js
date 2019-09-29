var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fuel growth with websites and content', description: 'Grow revenue with web design and content for marketing &amp; fundraising', bodyClass: 'home' });
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Fuel Copy', shortTitle: 'About us', description: 'As a marketing and fundraising team, Fuel Copy helps companies grow', bodyClass: 'about'});
});

/* TODO about route */

router.get('/team-bios', function(req, res, next) {
  res.render('team-bios', { title: 'Funding and marketing strategists | Fuel Copy', description: 'Benefit from our team of web designers, strategists, writers and fundraisers.', shortTitle: 'Meet the team', bodyClass: 'teamBios', layout: 'case' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: '' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact | How to get in touch', description: 'Contact Fuel Copy for help with growth marketing and fundraising.', bodyClass: 'contact'});
});

router.get('/privacy', function(req, res, next) {
  res.render('privacy', { title: 'Privacy Policy, Fuel Copy',bodyClass: 'privacy'});
});

module.exports = router;
