const express = require("express");
const { addAnswer, editAnswer, deleteAnswer } = require("../Controllers/answerController");
const { isAuthenticated } = require("../Middleware/auth")
const router = express.Router();

router.route("/add/:questionId").post(isAuthenticated, addAnswer)
router.route("/:answerId").put(isAuthenticated, editAnswer).delete(isAuthenticated, deleteAnswer)

module.exports = router;