import mongoose from "mongoose";

const connect_db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("successfully connected to database.");
  } catch (error) {
    console.log("error : ", error.message);
    process.exit(1);
  }
};
export default connect_db;
