var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('portfolio', { title: 'Portfolio - Fuck Me' });
  });

module.exports = router;