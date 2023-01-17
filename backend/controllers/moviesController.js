import movies from "../models/model.js";

export const getMovies = async (req, res) => {
  try {
    const allMovies = await movies.find();
    res.status(200).json(allMovies);
  } catch (error) {
    console.log(error.message);
  }
};
