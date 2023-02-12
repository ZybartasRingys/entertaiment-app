import { SearchInput, SearchContainer } from "./styles/Search.styled";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";

/* Context*/
import { useStateContext } from "../Context/StateContext";

function Search() {
  const { inputRef, recomended, searchResults, setSearchResults } =
    useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /**
   * If the search input is empty, set the search results to the recomended movies. If the search input
   * is not empty, filter the recomended movies by the search input and set the search results to the
   * filtered movies.
   * @returns The searchResults array is being returned.
   */
  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    if (!e.target.value) {
      setSearchResults(recomended);
    }

    const resultsArray = recomended.filter((movie) =>
      movie.title.trim().includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchIcon />
      <SearchInput
        ref={inputRef}
        placeholder="Search for movies or TV series"
        onChange={handleSearchChange}
      ></SearchInput>
    </SearchContainer>
  );
}

export default Search;
