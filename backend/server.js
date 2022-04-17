const app = require("./app");
const ConnectToDatabase = require("./Database/ConnectToDatabase");
const cloudinary = require("cloudinary")

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "backend/Config/config.env" });
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

//Connecting to MongoDB
ConnectToDatabase()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on Port🔥: ${PORT}`);
})

