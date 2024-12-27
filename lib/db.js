import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected..");
  } catch (error) {
    console.error(error.message);
    console.log("Error in MongoDb Connection");
    process.exit(1);
  }
};

export default connectDB;
