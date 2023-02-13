import { createContext, useContext, useState, useEffect, useRef } from "react";
import axios from "axios";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trending, setTrending] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showAuth, setShowAuth] = useState(false);

  /* Function to get all movies from mongodb*/
  useEffect(() => {
    /**
     * GetMovies() is an async function that uses axios to make a GET request to the /movies endpoint of
     * the server, and then sets the state of the movies array to the response data.
     */
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/movies`);

        setMovies(response.data);
        setSearchResults(response.data);

        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovies();
  }, []);

  /* Function to set Trending movies*/

  useEffect(() => {
    /**
     * The setTrendingMovies function filters through the movies array and returns the movies that have
     * a property of isTrending set to true.
     */

    const setTrendingMovies = () => {
      const trendingMovies = movies.filter(
        (trendingMovie) => trendingMovie.isTrending === true
      );

      setTrending(trendingMovies);
    };

    setTrendingMovies();
  }, [movies]);

  useEffect(() => {
    const setbookmarkedMovies = () => {
      const bookmarkedMovies = movies.filter((movie) => movie.isBookmarked);
      setBookmarked(bookmarkedMovies);
    };

    setbookmarkedMovies();
  }, [movies]);

  return (
    <Context.Provider
      value={{
        movies,
        loading,
        setLoading,
        trending,
        bookmarked,
        setBookmarked,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
