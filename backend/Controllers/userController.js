const User = require("../Database/Models/userSchema");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const saveToCookie = require("../utils/saveToCookie");

exports.RegisterUser = catchAsyncErrors(async (req, res, next) => {

    const { name, email, UID, branch, password, interests } = req.body;
    if (email.slice(0, 9) != UID) {
        return next(new ErrorHandler(400, "Invalid Email or UID"));
    }
    if (await User.findOne({ email })) {
        return next(new ErrorHandler(400, "Email already exists"));
    }
    const user = await User.create({
        name,
        email,
        UID,
        branch,
        password,
        interests,
    })
    saveToCookie(res, 201, user);


})

exports.LoginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler(400, "Please enter all required fields"));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler(400, "Incorrect Username or Password"));
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return next(new ErrorHandler(400, "Incorrect Username or Password"));
    }
    saveToCookie(res, 200, user);

})


exports.LogoutUser = catchAsyncErrors(async (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    return res.status(200).json({ message: "Successfully logged out!" })
})