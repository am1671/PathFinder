require("dotenv").config();

const api_key = process.env.API_KEY;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
// module.exports = {
// 	entry: "./app.js",
// 	output: {
// 		path: "public",
// 		filename: "bundle.js"
// 	},
// 	plugins: [
// 		new HtmlWebpackPlugin({
// 			template: "/public/index.html",

// 			apiUrl: `https://maps.googleapis.com/maps/api/js?key=${api_key}&callback=initMap&libraries=places`
// 		})
// 	]
// };
module.exports = {
	// ... other config options
	plugins: [
		new Dotenv(),
		new HtmlWebpackPlugin({
			template: "public/index.html",
			apiURL: `https://maps.googleapis.com/maps/api/js?key=${api_key}&callback=initMap&libraries=places`
		})
	]
};
