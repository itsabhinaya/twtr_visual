/**
	 * Return information about a single specific user
	 * @returns {Promise<{screen_name: string, id: string, avatar: string}>}
	 */
	async function getUser(screen_name) {
		let params = {
			screen_name,
			include_entities: false,
		};

		console.log("Fetching user " + screen_name);
		const res = (await globalThis.TwitterClient.get("users/lookup", params))[0];

		return {
			id: res.id_str,
			screen_name: res.screen_name
		};
	}

module.exports = {
	getUser
};
