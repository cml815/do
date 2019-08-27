/* Unused route. No user registration on site */

var express = require('express');
var router = express.Router();

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/user', function(req, res, next) {
  User.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }).then(user => res.json(user));
});




module.exports = router;
