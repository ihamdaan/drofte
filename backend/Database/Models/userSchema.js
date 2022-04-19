const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const crypto = require("crypto");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Enter your name"],
        maxLength: [30, "Name cannot be greater than 30 characters"],
        minlength: [3, "Name must be atleast 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Please Enter your email"],
        match: [/[0-9][0-9][A-z]{3}[0-9]{4}@cuchd.in/, "Please enter Official mail id"],
    },
    UID: {
        type: String,
        required: [true, "Please Enter your UID"],
        match: [/[0-9][0-9][A-z]{3}[0-9]{4}/, "Please enter a valid UID"]
    },
    branch: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "Please Enter your password"],
        minlength: [6, "Password must be atleast 6 characters"],
        select: false
    },
    profilePhoto: {
        public_id: String,
        url: String
    },
    coverPhoto: {
        public_id: String,
        url: String
    },
    bio: {
        type: String,
    },
    links: {
        LinkedIn: String,
        Twitter: String,
        Instagram: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

// Password hashing 
userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            this.password = await bcrypt.hash(this.password, 10);
        }
        next();
    } catch (error) {
        console.log(error);
    }

})

// Comparing Passwords 
userSchema.methods.comparePassword = async function (pass) {
    try {
        return await bcrypt.compare(pass, this.password);
    } catch (error) {
        console.log(error.message);
    }

}
// JWT token
userSchema.methods.getJwtToken = function () {
    try {
        return jwt.sign({
            id: this._id
        }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE
        })
    } catch (error) {
        console.log(error);
    }
}

// Generate reset password token
userSchema.methods.generateToken = function () {

    // Generating token
    const token = crypto.randomBytes(20).toString("hex");

    // Hashing and adding token to UserSchema 
    this.resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");

    // Setting the password expire time to 15 mins
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return token;
}

module.exports = mongoose.model("User", userSchema);