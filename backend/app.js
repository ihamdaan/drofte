const express = require("express");
const CookieParser = require("cookie-parser")
const app = express()

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "backend/Config/config.env" });
}

app.use(express.json());
app.use(CookieParser())

const user = require("./Routes/userRoutes");
const question = require("./Routes/questionRoutes");
const answer = require("./Routes/answerRoutes");
const error = require("./Middleware/error");

app.use("/api/v1", user);
app.use("/api/v1/question", question);
app.use("/api/v1/answer", answer);

//For error handling
app.use(error)

module.exports = app;