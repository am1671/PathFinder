const express = require("express");
const router = express.Router();
const { showPage, searchedPage } = require("../controllers/general.js");
const isAuth = require("../middleware/auth").isAuth;

router.route("/").get(isAuth, showPage);
router.route("/search").post(isAuth, searchedPage);
module.exports = router;
