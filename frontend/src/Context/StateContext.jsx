import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

import { useAuthContext } from "../hooks/useAuthContext";

export const StateContext = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trending, setTrending] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  const [recomended, setRecomended] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useAuthContext();

  /* useEffects*/

  useEffect(() => {
    getBookmarkedMovies();
  }, [user]);

  useEffect(() => {
    setTrendingMovies();
  }, [movies]);

  useEffect(() => {
    getMovies();
  }, [bookmarked]);

  useEffect(() => {
    setRecomendedMovies();
  }, [movies]);

  /**
   * "getMovies" is an async function that sets the loading state to true, then it makes an axios request
   * to the server, then it sets the movies state to the response data, then it sets the search results
   * state to the response data, then it sets the loading state to false.
   */

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/movies");

      setMovies(response.data);
      setSearchResults(response.data);

      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

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

  /* Filtering through the searchResults array and returning a new array with only the movies that have
  isTrending set to false. */
  const setRecomendedMovies = () => {
    const filteredRecomendedMovies = searchResults.filter(
      (movie) => movie.isTrending === false
    );

    setRecomended(filteredRecomendedMovies);
  };

  /**
   * GetBookmarkedMovies() is an async function that uses axios to make a GET request to the server, and
   * then sets the response data to the bookmarked state.
   */

  const getBookmarkedMovies = async () => {
    try {
      setLoading(true);
      const response = await axios({
        method: "GET",
        url: `http://localhost:5000/movies/bookmarked`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setBookmarked(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addBookmark = async () => {
    try {
      const response = await axios({
        method: "PUT",
        url: `http://localhost:5000/movies/${_id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          isBookmarked: true,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

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
        addBookmark,
        recomended,
        setRecomended,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
