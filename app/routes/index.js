var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  var template_id = req.query.landingpage;
  req.session.template_id = template_id
  var template_path = path.join(__dirname, '..', 'templates', template_id+'.html');
  res.sendFile(template_path);
});


/* GET home page. */
router.get('/my_session', function(req, res, next) {
  res.send(req.session);
});


module.exports = router;
