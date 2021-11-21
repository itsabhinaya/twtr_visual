var express = require('express');
var router = express.Router();

/* GET stats listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


// router.post('/twi_user', function(req,res){
//   console.log(req.body);
//   res.render("stats", {user:"user"});
// })


// router.post('/', function (req, res) {
//     console.log(req.body.title);
//     res.send('Post page');
// });

/* Login user */
router.post('/stats', function (req, res, next) {
	const username = req.body.user;
	res.render('stats', {user: username});

});

module.exports = router;




