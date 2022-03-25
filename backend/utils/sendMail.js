const { google } = require('googleapis')
const nodemailer = require("nodemailer")

const oAuthToClient = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI
})
oAuthToClient.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN })

module.exports = async (email, subject, text, html) => {
    try {
        const accessToken = await oAuthToClient.getAccessToken()
        const transporter = nodemailer.createTransport({
            service: process.env.SMTP_SERVICE,
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL_ID,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                accessToken: accessToken
            }
        })
        await transporter.sendMail({
            from: `DROFTE <${process.env.EMAIL_ID}>`,
            to: email,
            subject,
            text,
            html
        })
    } catch (error) {
        console.log(error)
    }
}