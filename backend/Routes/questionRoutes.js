const express = require("express");
const { createQuestion, getAllQuestions, editQuestion, deleteQuestion, getSingleQuestion, getLoggedInUserQuestions, getLoggedInUserRemarks, getAllTags } = require("../Controllers/questionController");
const { isAuthenticated } = require("../Middleware/auth")
const router = express.Router();

router.route("/create").post(isAuthenticated, createQuestion)
router.route("/my").get(isAuthenticated, getLoggedInUserQuestions)
router.route("/my/answers").get(isAuthenticated, getLoggedInUserRemarks)
router.route("/all").get(getAllQuestions)
router.route("/tags").get(getAllTags)
router.route("/:questionId").get(getSingleQuestion).put(isAuthenticated, editQuestion).delete(isAuthenticated, deleteQuestion)

module.exports = router;