const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
	try {
		mongoose.connect(db);
		console.log("MongoDB ok");
	} catch (err) {
		console.log(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
