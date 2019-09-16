var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('about', { layout: 'default', bodyClass: "team-bios" });
  });

  router.get('/caroline-leopold', function(req, res, next) {
    res.render('caroline-leopold', { layout: 'default', bodyClass: 'leopold', firstname: 'Caroline', lastname: 'Leopold', fullname: 'Caroline Leopold', img: 'caroline-leopold', linkedin: 'https://www.linkedin.com/in/cleopold/' });
  });

  router.get('/rich-garella', function(req, res, next) {
    res.render('rich-garella', { layout: 'default', bodyClass: 'garella', firstname: "Rich", lastname:'Garella', fullname: 'Rich Garella', img: 'rich-garella', linkedin: 'https://www.linkedin.com/in/garella/' });
  });

  router.get('/dave-scholnick', function(req, res, next) {
    res.render('dave-scholnick', { layout: 'default', bodyClass: 'scholnick', firstname: 'Dave',lastname: 'Scholnick', fullname: 'Dave Scholnick', img: 'dave-scholnick', linkedin: 'https://www.linkedin.com/in/davidscholnick/' });
  });

  router.get('/dana-henry', function(req, res, next) {
    res.render('dana-henry', { layout: 'default', bodyClass: 'henry', firstname: 'Dana',lastname: 'Henry', fullname: 'Dana Henry', img: 'dana-henry', linkedin: 'https://www.linkedin.com/in/dana-henry-writes/' });
  });

  router.get('/ed-apffel', function(req, res, next) {
    res.render('ed-apffel', { layout: 'default', bodyClass: 'apffel', firstname: 'Ed', lastname: 'Apffel', fullname: 'Ed Apffel', img: 'ed-apffel', linkedin: 'https://www.linkedin.com/in/edapffel/' });
  });
  
  router.get('/darcie-goodwin', function(req, res, next) {
    res.render('darcie-goodwin', { layout: 'default', name: 'Darcie Goodwin', firstname: 'Darcie', lastname: 'Goodwin', fullname: 'Darcie Goodwin', img: 'darcie-goodwin', linkedin: 'https://www.linkedin.com/in/darcie-goodwin-99b327/'});
  });

router.get('/team-bios', function(req, res, next) {
  res.render('team-bios', { layout: 'default' });
});

/* About page route - Fix or delete 

  router.get('/about', function(req, res, next) {
    // Below I'm passing in a JSON object (or hash table of keys and values, which is similar to an associative array) 
    // as a 2nd parameter to the "tester.handlebars" template
    res.render('about', {
        members: [
        {
          name: "Caroline Leopold",
          role: "Founder, Client Relations and Creative Director",
          powers: [
            "Medical marketing",
            "Contracts, grants, RFPs",
            "Web design"
          ]
        },
        {
          name: "Dana Henry",
          role: "Content Director",
          powers: [
            "Campaign strategy",
            "Science journalist",
            "Tech copywriter"
          ]
        },
        {
          name: "Rich Garella",
          role: "Technology / Interactive Director",
          powers: [
            "Video producer",
            "Journalism background"
          ]
        },
        {
          name: "Darcie Goodwin",
          role: "Content Manager",
          powers: [
            "Large brand experience",
            "International experience"
          ]
        },
        {
          name: "Ed Apffel",
          role: "Senior Technical Writer",
          powers: [
            "financial research/writing",
            "technical writing"
          ]
        } 
      ]
    }
  }); 
  
  */

module.exports = router;
