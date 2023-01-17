import mongoose from "mongoose";

const moviesSchema = mongoose.Schema({
  title: String,
  thumbnail: {},
  year: Number,
  category: String,
  rating: String,
  isBookmarked: Boolean,
  isTrending: Boolean,
});

const movies = mongoose.model("movies", moviesSchema);

export default movies;
