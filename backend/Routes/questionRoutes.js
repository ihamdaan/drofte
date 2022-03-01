const express = require("express");
const { createQuestion, getAllQuestions, editQuestion, deleteQuestion, getSingleQuestion } = require("../Controllers/questionController");
const { isAuthenticated } = require("../Middleware/auth")
const router = express.Router();

router.route("/create").post(isAuthenticated, createQuestion)
router.route("/all").get(isAuthenticated, getAllQuestions)
router.route("/:questionId").get(isAuthenticated, getSingleQuestion).put(isAuthenticated, editQuestion).delete(isAuthenticated, deleteQuestion)

module.exports = router;