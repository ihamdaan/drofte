const Answer = require("../Database/Models/answerSchema");
const Question = require("../Database/Models/questionSchema");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");

exports.addAnswer = catchAsyncErrors(async (req, res, next) => {

    const { answer } = req.body;
    const { questionId } = req.params;
    if (!answer) {
        return next(new ErrorHandler(400, "Answer cannot be empty."));
    }
    const questionFound = await Question.findById(questionId);
    if (!questionFound) {
        return next(new ErrorHandler(404, "Question not found."));
    }

    const ans = await Answer.create({ answer, questionId, user: req.user._id });
    await questionFound.answers.push(ans._id);
    await questionFound.save();
    return res.status(201).json({ success: true, ans });


})

exports.editAnswer = catchAsyncErrors(async (req, res, next) => {

    const { answer } = req.body;
    const { answerId } = req.params;
    if (!answer) {
        return next(new ErrorHandler(400, "Answer cannot be empty."));
    }
    const answerFound = await Answer.findById(answerId);
    if (!answerFound) {
        return next(new ErrorHandler(404, "Answer not found."));
    }
    if (answerFound.user.toString() !== req.user._id.toString()) {
        return next(new ErrorHandler(403, "You are not authorized to edit this answer."));
    }

    answerFound.answer = answer;
    await answerFound.save();
    return res.status(200).json({ success: true, answerFound });

})

exports.deleteAnswer = catchAsyncErrors(async (req, res, next) => {

    const { answerId } = req.params;
    const answerFound = await Answer.findById(answerId);
    if (!answerFound) {
        return next(new ErrorHandler(404, "Answer not found."));
    }
    if (answerFound.user.toString() !== req.user._id.toString()) {
        return next(new ErrorHandler(403, "You are not authorized to delete this answer."));
    }
    let question = await Question.findById(answerFound.questionId)
    const answers = question.answers.filter(ans => ans.toString() !== answerFound._id.toString());
    question.answers = answers;
    await question.save();
    await answerFound.remove();
    return res.status(200).json({ success: true, message: "Answer deleted successfully." });

})