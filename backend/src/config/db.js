import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    console.log("Connection Stablished with DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
