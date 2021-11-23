var express = require('express');
var router = express.Router();
const dotenv = require("dotenv");
const {getUser} = require("./api");
const Twitter = require("twitter-lite");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'title'});
});

/* Login user */
router.post('/stats', async function (req, res, next) {
	const username = req.body.user;
			
	/**
	 * Load the environment variables from the .env file
	 */
	dotenv.config();

	const client = new Twitter({
		consumer_key: process.env.CONSUMER_KEY,
		consumer_secret: process.env.CONSUMER_SECRET,
	});

	console.log("after twitter client");

	// Use the previous client to fetch the bearer token
	// This method gives you an application-only token specifically for read-only access to public information.
	const bearer = await client.getBearerToken();

	// Create a new twitter client with this token.
	// We assign this client to a global variable so we can access it in the api module
	globalThis.TwitterClient = new Twitter({
		bearer_token: bearer.access_token,
	});

	// fetch the information of the logged in user
	// instead of getMe you could replace it with another method to get a third user to generate their circles
	const user_data = await getUser(username);

	res.render('stats', {user: username, screen_name: user_data.screen_name, id: user_data.id});

});

dotenv.config();


module.exports = router;
