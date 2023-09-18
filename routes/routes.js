const express = require("express");
const router = express.Router();

const GeneralRoute = require("./general");
router.use("/home", GeneralRoute);

const LoginRoute = require("./login");
router.use("/", LoginRoute);

module.exports = router;
