const mongoose = require("mongoose");

const connectToMongo = async () => {
    try {
        const data = await mongoose.connect(process.env.DB_URI)
        if (data) {
            console.log(`Connected to Database🏢: ${data.connection.host}`);
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectToMongo;