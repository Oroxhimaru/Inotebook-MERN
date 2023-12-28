var express = require('express');
var router = express.Router();
const userModel = require("../models/User");
const notesModel = require("../models/Notes");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/login', function(req, res, next) {
  res.send("Hello  login");
});


router.get('/api/v1/signup', function(req, res, next) {
  res.send("Hello  signup");
});

module.exports = router;
