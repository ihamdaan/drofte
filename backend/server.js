const app = require("./app");
const ConnectToDatabase = require("./Database/ConnectToDatabase");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "backend/Config/config.env" });
}

//Connecting to MongoDB
ConnectToDatabase()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on Port🔥: ${PORT}`);
})

