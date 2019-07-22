var express = require('express');
var router = express.Router();

/* Project's Page */

router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Case studies of marketing and fundraising success', shortTitle: 'Success stories', description: 'Lessons from our client success stories', layout: 'portfolio' });
});

// Jeff Grant case study

router.get('/jeff-grant-technology-influencer', function(req, res, next) {
  res.render('jeff-grant-technology-influencer', { 
    title: 'From Behind the Camera: From Videographer to YouTube Influencer',
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

router.get('/press-campaign', function(req, res, next) {
  res.render('pa-press-campaign', { 
    title: 'Mass Shootings No More: PR Campaign to Move Pennsylvania Forward',
    name: 'David Scholnick',
    jobTitle: 'Videographer, YouTube Influencer',
    caption: 'Jeff Grant on location for a video shoot',
    credit: 'RMM (get info)',
    tag1: 'comms strategy',
    tag2: 'public relations',
    tag3: '',
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