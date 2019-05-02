var express = require('express');
var router = express.Router();

/* Project's Page */

router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Here\'s Our Work', layout: 'portfolio' });
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