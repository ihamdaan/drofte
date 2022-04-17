module.exports = (res, status, user) => {
    const token = user.getJwtToken();
    res.status(status).cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000)
    }).json({ success: true, user, token })
}