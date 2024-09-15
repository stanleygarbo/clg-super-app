// config/config.js
import { connect } from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the app if unable to connect
  }
};

export default connectDB;
