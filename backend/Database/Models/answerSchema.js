const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    answer: {
        type: String,
        required: true
    },
    questionId: {
        type: mongoose.Types.ObjectId,
        ref: "Question",
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    ],
    dislikes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    ]

});

module.exports = mongoose.model("Answer", answerSchema);