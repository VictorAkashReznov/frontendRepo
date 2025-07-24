const mongoose = require("mongoose");
const { string, boolean } = require("zod");
const mongoURI = "mongodb://127.0.0.1:27017/your_database_name";

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const todo = mongoose.model("todo", todoSchema);

module.exports = { todo };
