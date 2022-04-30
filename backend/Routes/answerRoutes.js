const express = require("express");
const { addAnswer, editAnswer, deleteAnswer, likeAndUnlikeAnswer, DislikeAnswer } = require("../Controllers/answerController");
const { isAuthenticated } = require("../Middleware/auth")
const router = express.Router();

router.route("/add/:questionId").post(isAuthenticated, addAnswer)
router.route("/like/:ansId").get(isAuthenticated, likeAndUnlikeAnswer)
router.route("/dislike/:ansId").get(isAuthenticated, DislikeAnswer)
router.route("/:answerId").put(isAuthenticated, editAnswer).delete(isAuthenticated, deleteAnswer)

module.exports = router;