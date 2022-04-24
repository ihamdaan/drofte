const User = require("../Database/Models/userSchema");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const saveToCookie = require("../utils/saveToCookie");
const sendMail = require("../utils/sendMail");
const crypto = require("crypto")
const cloudinary = require("cloudinary")

exports.RegisterUser = catchAsyncErrors(async (req, res, next) => {

    const { name, email, UID, password } = req.body;
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
        password,
        profilePhoto: {
            public_id: "empty",
            url: "https://res.cloudinary.com/rajat0512/image/upload/v1642447946/E-commerce/avatar_gehm7u.jpg"
        }
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
        const text = `Hello User👤,\n\n
        It seems like you are facing problem logging in.\n
        No need to worry, you can reset your Drofte password by clicking the link below.
        \n\n ${url}\n\n
        If you didn't request a password reset, feel free to delete this email and carry on your discussion with acquaintance!\n\n
        All the best🌠,\n
        The Drofte Team`;
        const html = `<b>Hello User👤,</b>
        <p>It seems like you are facing problem logging in. </p>
        <p>No need to worry, you can reset your Drofte password by clicking the link below.</p>
        <br>
        <b>Click Here⬇️</b>
        <p>${url}</p>
        <br>
        <p>If you didn't request a password reset, feel free to delete this email and carry on your discussion with acquaintance!<p>
        All the best,<br>
        The Drofte Team`
        await sendMail(email, subject, text, html);
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

// Update Profile
exports.updateProfile = catchAsyncErrors(async (req, res) => {
    const { name, bio, links, branch } = req.body;
    const Data = { name, bio, links, branch }

    const newData = await addImage(req, Data)

    const updatedUser = await User.findByIdAndUpdate(req.user.id, { ...newData }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    return res.status(200).json({ success: true, message: "Profile updated successfully!", user: updatedUser })
})

//Update user password
exports.updatePassword = catchAsyncErrors(async (req, res) => {
    const { oldPass, newPass, confirmPass } = req.body
    if (!oldPass || !newPass || !confirmPass) {
        return res.status(400).json({ error: "Please fill all the fields" })
    }

    const user = await User.findById(req.user._id).select("+password")
    const isPasswordMatched = await user.comparePassword(oldPass)
    if (!isPasswordMatched) {
        return res.status(400).json({ error: "Old password is incorrect" })
    }
    if (newPass.length < 6) {
        return res.status(400).json({ error: "Password must be atleast 6 characters" })
    }
    if (newPass !== confirmPass) {
        return res.status(400).json({ error: "Password doesn't match" })
    }
    user.password = newPass
    await user.save({ validateBeforeSave: false })
    saveToCookie(res, 200, user)
})

const addImage = async (req, newData) => {

    const user = await User.findById(req.user._id)

    if (req.body.profilePhoto !== "") {
        const image_id = user.profilePhoto.public_id
        await cloudinary.v2.uploader.destroy(image_id)
        const myCloud = await cloudinary.v2.uploader.upload(req.body.profilePhoto, {
            folder: "Drofte",
            crop: "scale"
        })
        newData.profilePhoto = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        }
    }
    if (req.body.coverPhoto !== "") {
        const image_id = user.coverPhoto.public_id
        await cloudinary.v2.uploader.destroy(image_id)
        const myCloud = await cloudinary.v2.uploader.upload(req.body.coverPhoto, {
            folder: "Drofte",
            crop: "scale"
        })
        newData.coverPhoto = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        }
    }
    return newData
}