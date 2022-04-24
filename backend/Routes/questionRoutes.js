const express = require("express");
const { createQuestion, getAllQuestions, editQuestion, deleteQuestion, getSingleQuestion, getLoggedInUserQuestions, getLoggedInUserRemarks } = require("../Controllers/questionController");
const { isAuthenticated } = require("../Middleware/auth")
const router = express.Router();

router.route("/create").post(isAuthenticated, createQuestion)
router.route("/my").get(isAuthenticated, getLoggedInUserQuestions)
router.route("/my/answers").get(isAuthenticated, getLoggedInUserRemarks)
router.route("/all").get(getAllQuestions)
router.route("/:questionId").get(isAuthenticated, getSingleQuestion).put(isAuthenticated, editQuestion).delete(isAuthenticated, deleteQuestion)

module.exports = router;