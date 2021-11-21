var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'title'});
});

/* Login user */
router.post('/stats', function (req, res, next) {
	const username = req.body.user;
	res.render('stats', {user: username});

});


module.exports = router;
