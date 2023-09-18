const express = require("express");
var app = express();
var routes = require("./routes/routes");
const notFound = require("./middleware/not-found-page");
const errorHandler = require("./middleware/error-handler");

const path = require("path");
require("./config/database");
var passport = require("passport");
const session = require("express-session");
const connection = require("./config/database");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);

require("dotenv").config();

const port = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("dist"));

app.set("views", __dirname + "/public");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionStore = new MongoStore({
	mongooseConnection: mongoose.connection,
	collection: "sessions"
});

app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
		store: sessionStore,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24
		}
	})
);

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
	try {
		await connection(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`server @ http://localhost:${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
