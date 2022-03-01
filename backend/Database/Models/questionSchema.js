const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    tags: [
        { type: String }
    ],
    answers: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Answer"
        }],
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Question", questionSchema);