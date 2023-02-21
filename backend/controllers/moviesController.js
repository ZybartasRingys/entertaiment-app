import model from "../models/model.js";

// @desc    Get all movies
// @route   GET /movies
// @access  Public

export const getMovies = async (req, res) => {
  try {
    const allMovies = await model.find();
    res.status(200).json(allMovies);
  } catch (error) {
    console.log(error.message);
  }
};

// @desc   update movie
// @route   GET /movies/:id
// @access  Public

export const updateMovie = async (req, res) => {
  try {
    const user_id = req.user._id;

    const updatedMovie = await model.findByIdAndUpdate(
      req.params.id,

      {
        $set: req.body,
        user_id,
      },
      { new: true }
    );
    res.status(200).json(updatedMovie);
  } catch (error) {
    console.log(error.message);
  }
};

// @desc    Bookmarked movies
// @route   GET  /movies
// @access  Public

export const getBookmarkedMovies = async (req, res) => {
  try {
    const user_id = req.user._id;
    console.log(user_id);
    const bookmarkedMovie = await model.find({ isBookmarked: true, user_id });
    res.status(200).json(bookmarkedMovie);
  } catch (error) {
    console.log(error.message);
  }
};
