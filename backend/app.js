const express = require("express");
const CookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const app = express()
const path = require("path")

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "backend/Config/config.env" });
}

app.use(express.json({ limit: "50mb" }));
app.use(CookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())

const user = require("./Routes/userRoutes");
const question = require("./Routes/questionRoutes");
const answer = require("./Routes/answerRoutes");
const error = require("./Middleware/error");

app.use("/api/v1", user);
app.use("/api/v1/question", question);
app.use("/api/v1/answer", answer);

//For error handling
app.use(error)

//For production
app.use(express.static(path.join(__dirname, "../client/build")))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"))
})

module.exports = app;