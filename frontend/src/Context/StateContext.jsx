import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

import { useAuthContext } from "../hooks/useAuthContext";

export const StateContext = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trending, setTrending] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
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
  }, []);
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
