const express = require("express");
const { LoginUser, RegisterUser, LogoutUser } = require("../Controllers/userController");
const router = express.Router();

router.route("/login").post(LoginUser)
router.route("/register").post(RegisterUser)
router.route("/logout").get(LogoutUser)

module.exports = router;