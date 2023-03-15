/* Styled components inputs*/
import { useState } from 'react'
import {
  SearchInput,
  SearchContainer,
  SearchIcon,
} from './styles/Search.styled'

/* Context*/
import { useStateContext } from '../Context/StateContext'

function Search() {
  const { movies, searchResults, setSearchResults } = useStateContext()
  const [found, setFound] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  /**
   * If the search input is empty, set the search results to the recomended movies. If the search input
   * is not empty, filter the recomended movies by the search input and set the search results to the
   * filtered movies.
   * @returns The searchResults array is being returned.
   */
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(movies)

    const resultsArray = movies.filter((movie) =>
      movie.title.trim().toLowerCase().includes(e.target.value)
    )

    setSearchResults(resultsArray)
  }

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchIcon />
      <SearchInput
        placeholder='Search for movies or TV series'
        onChange={handleSearchChange}
      ></SearchInput>
    </SearchContainer>
  )
}

export default Search
