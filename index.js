var watsonImport = require("./watson-import.js");

var config = require("./config.json");

var sourceCfg = {
	username: config.source.username,
	password: config.source.password,
	url: config.source.url,
	version: config.source.version
};

watsonImport.getWatsonWorkspace(sourceCfg, "c8d63b9a-b49e-4d7b-a210-de0c82480800", function(err, res) {
	if (err) {
		console.log("There was an issue accessing the workspace");
		console.log(err);
		return;
	}
	console.log(res);
});
