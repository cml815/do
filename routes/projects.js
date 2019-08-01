var express = require('express');
var router = express.Router();

/* Project's Page */

router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Case studies of marketing and fundraising success', bodyClass: 'projects', shortTitle: 'Success stories', description: 'Lessons from our client success stories', layout: 'default' });
});

// Jeff Grant case study

router.get('/social-media-influencer', function(req, res, next) {
  res.render('social-media-influencer', { 
    title: 'Mighty Influencers',
    summary: 'YouTube influencer talks about finding an audience and sponsors',
    name: 'Jeff Grant',
    jobTitle: 'Videographer, YouTube Influencer',
    caption: 'Jeff Grant on location for a video shoot',
    credit: 'RMM (get info)',
    tag: ['social media','influencer marketing','video'],
    layout: 'case' 
  });
});

router.get('/press-campaign', function(req, res, next) {
  res.render('press-campaign', { 
    title: 'Mass Shootings, No More',
    summary: 'How a citizens group organized the largest gun violence prevention rally ever in Pennsylvania and was catapulted to the national stage. ',
    name: 'David Scholnick',
    jobTitle: 'Videographer, YouTube Influencer',
    caption: '',
    credit: 'RMM (get info)',
    tag: ['strategy', 'public relations', 'earned media'],
    layout: 'case' 
  });
});

router.get('/founder-stories', function(req, res, next) {
  res.render('founder-stories', { 
    title: 'Founder stories on risk, reward and travel',
    summary: 'Fuel interviewed dozens of entrepreneurs on how to make a mark in the travel world',
    name: 'null',
    jobTitle: 'null',
    caption: 'null',
    credit: 'null',
    tag: ['content marketing', 'thought leadership', 'seo'],
    layout: 'case' 
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