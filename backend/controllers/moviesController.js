import movies from "../models/model.js";

// @desc    Get all movies
// @route   GET /movies
// @access  Public

export const getMovies = async (req, res) => {
  try {
    const allMovies = await movies.find();
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
    const updatedMovie = await movies.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedMovie);
  } catch (error) {
    console.log(error.message);
  }
};

// @desc    Bookmarked movies
// @route   GET  /movies/:id
// @access  Public

export const getBookmarkedMovies = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}
