const Answer = require("../Database/Models/answerSchema");
const Question = require("../Database/Models/questionSchema");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/ApiFeatures");
const ErrorHandler = require("../utils/ErrorHandler");

exports.createQuestion = catchAsyncErrors(async (req, res, next) => {

    const { title, desc, tags } = req.body;
    if (!title || !desc) {
        return next(new ErrorHandler(400, "Please provide all required fields"));
    }
    const question = await Question.create({ title, desc, tags, user: req.user._id });
    return res.status(201).json({ success: true, question });

})

exports.getAllQuestions = catchAsyncErrors(async (req, res, next) => {
    const filteredQues = new ApiFeatures(Question.find().populate({
        path: "answers",
        populate: {
            path: "user",
        }
    }).populate("user", "name email"), req.query).search();
    const data = await filteredQues.list;

    if (!data) {
        return next(new ErrorHandler(400, "No questions found"))
    }
    return res.status(200).json({ success: true, data });
})

exports.getSingleQuestion = catchAsyncErrors(async (req, res, next) => {
    const question = await Question.findById(req.params.questionId).populate("answers", "answer user createdAt");

    if (!question) {
        return next(new ErrorHandler(400, "No questions found"))
    }
    return res.status(200).json({ success: true, question });
})

exports.editQuestion = catchAsyncErrors(async (req, res, next) => {

    const { title, desc, tags } = req.body;
    const { questionId } = req.params;
    if (!title || !desc) {
        return next(new ErrorHandler(400, "Please provide all required fields"));
    }
    const question = await Question.findById(questionId);
    if (!question) {
        return next(new ErrorHandler(404, "Question not found"));
    }
    if (question.user.toString() !== req.user._id.toString()) {
        return next(new ErrorHandler(403, "You are not authorized to edit this question"));
    }
    question.title = title;
    question.desc = desc;
    question.tags = tags;
    await question.save();

    return res.status(200).json({ success: true, question });

})

exports.deleteQuestion = catchAsyncErrors(async (req, res, next) => {

    const { questionId } = req.params;
    const question = await Question.findById(questionId);
    if (!question) {
        return next(new ErrorHandler(404, "Question not found"));
    }
    if (question.user.toString() !== req.user._id.toString()) {
        return next(new ErrorHandler(403, "You are not authorized to delete this question"));
    }
    question.answers.forEach(async answer => {
        await Answer.findByIdAndDelete(answer);
    })
    await question.remove();

    return res.status(200).json({ success: true, message: "Question deleted successfully" });

})