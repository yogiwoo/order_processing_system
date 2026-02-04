import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect("//localhost:27017/orders_db");
  console.log("MongoDB connected");
};

export default connectDB;
