var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('work', { title: 'Work' });
  });
  
  router.get('/marketing', function(req, res, next) {
    res.render('marketing', { title: 'Marketing' });
  });

  module.exports = router;