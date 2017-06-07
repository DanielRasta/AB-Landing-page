var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  var landing_page = req.query.landingpage;
  var template_path = path.join(__dirname, '..', 'templates', landing_page+'.html');
  res.sendFile(template_path);
});

module.exports = router;
