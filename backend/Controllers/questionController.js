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
    const numberOfDocuments = await Question.countDocuments();
    const ResultsPerPage = 3
    const AllQues = Question.find().populate({
        path: "answers",
        populate: {
            path: "user",
            select: "name email profilePhoto"
        }
    }).populate("user", "name email profilePhoto").sort({ createdAt: -1 });
    const filteredQues = new ApiFeatures(AllQues, req.query).search();
    let data = await filteredQues.list;

    const filteredQuesCount = data.length
    filteredQues.pagination(ResultsPerPage);
    data = await filteredQues.list.clone();
    if (!data) {
        return next(new ErrorHandler(400, "No questions found"))
    }
    return res.status(200).json({ success: true, data, numberOfDocuments, ResultsPerPage, filteredQuesCount });
})

exports.getSingleQuestion = catchAsyncErrors(async (req, res, next) => {
    const question = await Question.findById(req.params.questionId).populate({
        path: "answers",
        populate: {
            path: "user",
            select: "name email profilePhoto date"
        }
    }).populate("user", "name email profilePhoto date");

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

exports.getLoggedInUserQuestions = catchAsyncErrors(async (req, res, next) => {

    const ResultsPerPage = 2
    const filteredQues = new ApiFeatures(Question.find({ user: req.user._id }).populate({
        path: "answers",
        populate: {
            path: "user",
        }
    }).populate("user"), req.query).search().pagination();
    let questions = await filteredQues.list;

    const filteredQuesCount = questions.length
    filteredQues.pagination(ResultsPerPage);
    questions = await filteredQues.list.clone();

    if (!questions) {
        return next(new ErrorHandler(404, "No questions found"));
    }

    return res.status(200).json({ success: true, questions, ResultsPerPage, filteredQuesCount });
})

exports.getLoggedInUserRemarks = catchAsyncErrors(async (req, res, next) => {

    const ResultsPerPage = 2
    const filteredAnswer = new ApiFeatures(Answer.find({ user: req.user._id }).populate("user"), req.query).search().pagination();
    let answers = await filteredAnswer.list;

    const filteredQuesCount = answers.length
    filteredAnswer.pagination(ResultsPerPage);
    answers = await filteredAnswer.list.clone();

    if (!answers) {
        return next(new ErrorHandler(404, "No answers found"));
    }

    return res.status(200).json({ success: true, answers, ResultsPerPage, filteredQuesCount });
})

exports.getAllTags = catchAsyncErrors(async (req, res, next) => {

    const tags = await Question.distinct("tags");
    if (!tags) {
        return next(new ErrorHandler(404, "No tags found"));
    }
    return res.status(200).json({ success: true, tags });
})