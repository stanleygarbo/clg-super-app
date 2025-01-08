// config/config.js
const { connect, plugin } = require("mongoose");
require("dotenv").config();
const mongoosePlugins = require("../utils/mongoosePlugins");

plugin(mongoosePlugins.excludeIsDeletedPlugin);

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the app if unable to connect
  }
};

module.exports = connectDB;
