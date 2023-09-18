const { json } = require("express");
const mongoose = require("mongoose");
const asyncWrapper = require("../middleware/async");
const Customer = require("../models/customer");
const Journey = require("../models/journey");
const showPage = asyncWrapper(async (req, res) => {
	res.status(200).render("../public/home.ejs");
	// res.status(200).send("../public/without.html");
});

const searchedPage = asyncWrapper(async (req, res) => {
	const data = {
		source: req.body.source,
		dest: req.body.dest,
		mode: req.body.mode,
		midway: req.body.midway
	};
	console.log(req.body.source);
	let user_id = new mongoose.Types.ObjectId(req.user._id);
	const newJourney = new Journey({
		source: req.body.source,
		destination: req.body.dest,
		user_id: user_id,
		mode: req.body.mode
	});
	newJourney.save().then((user) => {
		console.log(user);
	});
	const jsondata = JSON.stringify(data);
	res.status(200).render("result.ejs", { data: jsondata });
});

module.exports = {
	showPage,
	searchedPage
};
