var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/about', function(req, res) {
  // Below I'm passing in a JSON object (or hash table of keys and values, which is similar to an associative array) 
  // as a 2nd parameter to the "tester.handlebars" template
  res.render('about', {
      title: "Meet the Team",
      name: [ "Caroline Leopold", "Dana Henry", "Rich Garella", "Darcie Goodwin", "Ed Apffel"],
      role: ["Founder", "Strategist", "Editor", "Writer", "Writer"],
      url: ["./team/caroline_leopold", "./team/dana_henry", './team/rich_garella', './team/darcie_goodwin', './team/ed_apffel']
    });
  });

  /* Fix Fix fix 

  router.get('/about', function(req, res, next) {
    // Below I'm passing in a JSON object (or hash table of keys and values, which is similar to an associative array) 
    // as a 2nd parameter to the "tester.handlebars" template
    res.render('about', {
        members: [
        {
          name: "Caroline Leopold",
          role: "Creative Director",
          powers: [
            "Medical marketing",
            "Contracts, grants, RFPs",
            "Web design"
          ]
        },
        {
          name: "Dana Henry",
          role: "Content Strategy Director",
          powers: [
            "Campaign strategy",
            "Science journalist",
            "Tech copywriter"
          ]
        },
        {
          name: "Rich Garella",
          role: "Editor in Chief",
          powers: [
            "Video producer",
            "Journalism background"
          ]
        },
        {
          name: "Darcie Goodwin",
          role: "Senior Content Writer",
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

router.get('/tester', function(req, res) {
  // Below I'm passing in a JSON object (or hash table of keys and values, which is similar to an associative array) 
  // as a 2nd parameter to the "tester.handlebars" template
  res.render('tester', {
      first_name: "Donald",
      last_name: "Duck",
      now: new Date(),
      random_num: Math.round(Math.random() * 10)
  });
});

router.get('/work', function(req, res, next) {
  res.render('work', { title: 'Work' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* https://nodemailer.com/smtp/oauth2/ */

// POST route from contact form

/*
router.post('/contact', function (req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: 'process.env.MAIL_USER',
    subject: 'New message from contact form at fuelcopy.com',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.render('contact-failure');
    }
    else {
      res.render('contact-success');
    }
  });
});

*/

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: 'user@example.com',
      clientId: '000000000000-xxx0.apps.googleusercontent.com',
      clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0',
      refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
      accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
      expires: 1484314697598
  }
});


router.post('/contact', function (req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    }
  });
mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: 'process.env.MAIL_USER',
    subject: 'New message from contact form at fuelcopy.com',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.render('contact-failure');
    }
    else {
      res.render('contact-success');
    }
  });
});




module.exports = router;
