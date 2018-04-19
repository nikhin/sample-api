var express = require('express');
var router = express.Router();
var cors = require('cors');
var json = require('../json/interest.json');


router.get('/', cors(), function (req, res, next) {
  res.send(json);
});


module.exports = router;
