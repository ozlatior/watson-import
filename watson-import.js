var watson = require("watson-developer-cloud");

var getWatsonWorkspace = function(sourceCfg, source, cb) {
	var assistantSrc;
	assistantSrc = new watson.AssistantV1(sourceCfg);

	assistantSrc.getWorkspace({workspace_id: source, export: true}, function (err, response) {
		if (err)
			return cb(err);
		return cb(null, response);
	});
};

module.exports.getWatsonWorkspace = getWatsonWorkspace;
