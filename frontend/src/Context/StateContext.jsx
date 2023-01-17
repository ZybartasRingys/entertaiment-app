import { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [movies, setMovies] = useState([]);

  console.log(movies);

  // function to get Movies from database
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/movies`);

        setMovies(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovies();
  }, []);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
