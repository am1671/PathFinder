const mongoose = require("mongoose");

const JourneySchema = mongoose.Schema({
	source: {
		type: String,
		required: true
	},
	destination: {
		type: String,
		required: true
	},
	mode: {
		type: String,
		required: true
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
});

module.exports = mongoose.model("Journey", JourneySchema);
