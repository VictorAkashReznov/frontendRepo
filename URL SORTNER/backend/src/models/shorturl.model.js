import mongoose, { Types } from "mongoose";

const shortUrlSchema = new mongoose.Schema({
  orignal_url: {
    required: true,
    type: String,
  },
  short_url: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  clicks: {
    type: Number,
    // required: true,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
});

const shortUrl = mongoose.model("shortUrl", shortUrlSchema);
export default shortUrl;
