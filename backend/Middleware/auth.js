const jwt = require("jsonwebtoken")
const User = require("../Database/Models/userSchema");
const catchAsyncErrors = require("./catchAsyncErrors");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "Please login to access this resource" })
    }
    const data = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(data.id)
    next();
})