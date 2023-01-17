import mongoose from "mongoose";

const modelSchema = mongoose.Schema({
  title: String,
  thumbnail: {},
  year: Number,
  category: String,
  rating: String,
  isBookmarked: Boolean,
  isTrending: Boolean,
});

const model = mongoose.model("model", modelSchema);

export default model;
