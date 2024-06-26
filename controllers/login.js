const asyncWrapper = require("../middleware/async");
const router = require("express").Router();
const passport = require("passport");
const Customer = require("../models/customer");
const genPassword = require("../middleware/passwordUtils").genPassword;
const { createCustomError } = require("../errors/custom-error");
const getLoginPage = asyncWrapper(async (req, res) => {
	res.status(200).render("../public/login.ejs");
});

const getSignUpPage = asyncWrapper(async (req, res) => {
	res.status(200).render("../public/signup.ejs");
});
const signUpCustomer = asyncWrapper(async (req, res) => {
	console.log("helllooo");
	const saltHash = genPassword(req.body.password);

	const salt = saltHash.salt;
	const hash = saltHash.hash;
	console.log(req.body);
	const newUser = new Customer({
		username: req.body.username,
		email: req.body.email,
		phone: req.body.phone,
		hash: hash,
		salt: salt
	});
	console.log(newUser);
	newUser.save().then((user) => {
		console.log(user);
	});

	res.redirect("/home");
});
module.exports = {
	getLoginPage,
	getSignUpPage,
	signUpCustomer
};
