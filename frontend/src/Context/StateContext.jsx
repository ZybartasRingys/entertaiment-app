import { createContext, useContext, useState, useEffect } from 'react'
/* Axios*/
import axios from 'axios'
/* Context*/
import { useAuthContext } from '../hooks/useAuthContext'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [trending, setTrending] = useState([])
  const [bookmarked, setBookmarked] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const { user } = useAuthContext()
  const [recommended, setRecommended] = useState([])
  const [errorMsg, setErrorMsg] = useState([])

  /* useEffects */

  useEffect(() => {
    getBookmarkedMovies()
  }, [user])

  useEffect(() => {
    getMovies()
  }, [bookmarked])

  /**
   * "getMovies" is an async function that sets the loading state to true, then it makes an axios request
   * to the server, then it sets the movies state to the response data, then it sets the search results
   * state to the response data, then it sets the loading state to false.
   */

  const getMovies = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:5000/movies')

      setMovies(response.data)
      setSearchResults(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * GetBookmarkedMovies() is an async function that uses axios to make a GET request to the server, and
   * then sets the response data to the bookmarked state.
   */

  const getBookmarkedMovies = async () => {
    try {
      setLoading(true)
      const response = await axios({
        method: 'GET',
        url: `http://localhost:5000/movies/bookmarked`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })

      setBookmarked(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * It takes the _id of the movie that the user wants to bookmark, and then it sends a PUT request to
   * the server with the _id of the movie and the user's token.
   *
   * The server then finds the movie with the _id that was sent, and updates the movie's isBookmarked
   * property to true.
   *
   * The server then sends back the updated movie, and the updated movie is added to the bookmarked
   * array.
   *
   * The bookmarked array is then used to render the bookmarked movies.
   */
  const addBookmark = async (_id) => {
    console.log(_id)
    try {
      setLoading(true)
      const response = await axios({
        method: 'PUT',
        url: `http://localhost:5000/movies/${_id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          isBookmarked: true,
        },
      })
      setBookmarked([...bookmarked, response.data])
      setRecommended([...recommended])
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * It takes the _id of a movie and sends a PUT request to the server to update the movie's
   * isBookmarked property to false.
   */
  const remBookmark = async (_id) => {
    try {
      const response = await axios({
        method: 'PUT',
        url: `http://localhost:5000/movies/${_id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          isBookmarked: false,
        },
      })
      setBookmarked(
        bookmarked.filter((movie) => movie._id !== response.data._id)
      )
    } catch (error) {
      console.log(error.message)
    }
  }

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
        remBookmark,
        recommended,
        setRecommended,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
