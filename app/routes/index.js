var express = require('express');
var router = express.Router();
var path = require('path');
var lead_list = require('./../list_subscriber')

/* GET home page. */
router.get('/', function(req, res, next) {
  var template_id = req.query.landingpage;
  req.session.template_id = template_id
  var template_path = path.join(__dirname, '..', 'templates', template_id+'.html');
  res.sendFile(template_path);
});

/* GET session. */
router.get('/my_session', function(req, res, next) {
  res.send(req.session);
});


/* GET session. */
router.get('/thankstest', function(req, res, next) {
  var template_path = path.join(__dirname, '..', 'views', 'thankyou.html');
  	res.sendFile(template_path);
});


/* POST register to mailing list. */
router.post('/register', function(req, res) {
    
    lead_list(req.body.email,req.body.fullname,req.session.template_id)

    var template_path = path.join(__dirname, '..', 'views', 'thankyou.html');
  	res.sendFile(template_path);
});

module.exports = router;
