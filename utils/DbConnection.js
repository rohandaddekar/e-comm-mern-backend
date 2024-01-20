import mongoose from "mongoose";

const DbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("successfully connected to DB");
  } catch (error) {
    console.log("failed to connect DB", error);
  }
};

export default DbConnection;
