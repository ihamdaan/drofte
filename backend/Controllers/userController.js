const User = require("../Database/Models/userSchema");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const saveToCookie = require("../utils/saveToCookie");
const sendMail = require("../utils/sendMail");
const crypto = require("crypto")

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


exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return next(new ErrorHandler(400, "Please enter your email"));
    }
    const user = await User.findOne({ email });
    if (!user) {
        return next(new ErrorHandler(400, "User not found"));
    }
    const token = user.generateToken();
    await user.save({ validateBeforeSave: false });
    try {
        //Url for development
        const url = `http://localhost:3000/api/v1/resetPassword/${token}`;

        // const url = `${req.protocol}://${req.get("host")}/api/v1/resetPassword/${token}`;
        const subject = "DROFTE - Reset Password";
        const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please click here to proceed: \n\n ${url}`;
        await sendMail(email, subject, message);
        return res.status(200).json({ message: "Email sent to " + email + "!" });
    }
    catch (err) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false });
        return res.status(500).json({ error: err.message })
    }
})

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    const { password, confirmPassword } = req.body;
    if (!password || !confirmPassword) {
        return next(new ErrorHandler(400, "Please enter all required fields"));
    }
    if (password !== confirmPassword) {
        return next(new ErrorHandler(400, "Passwords do not match"));
    }
    const token = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({ resetPasswordToken: token }).select("+password");
    if (!user) {
        return next(new ErrorHandler(400, "Token is Invalid  or Expired"));
    }
    const now = Date.now();
    if (now > user.resetPasswordExpire) {
        return next(new ErrorHandler(400, "Token Expired"));
    }
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return res.status(200).json({ message: "Password Updated Successfully" });
});

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json({ success: true, user });
})