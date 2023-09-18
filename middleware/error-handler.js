const errorHandler = (err, req, res, next) => {
	// if (err instanceof CustomError) {
	// 	return res.status(err.statusCode).json({ msg: err.message });
	// }
	// return res.status(500).json({ msg: "Something went wrong!" });
	console.log(err);
	return res.status(500).send(err);
};

module.exports = errorHandler;
