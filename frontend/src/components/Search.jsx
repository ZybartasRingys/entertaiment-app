/* Styled components inputs*/
import { useState, useEffect } from "react";
import {
  SearchInput,
  SearchContainer,
  SearchIcon,
  Container,
  SearchText,
} from "./styles/Search.styled";

/* Context*/
import { useStateContext } from "../Context/StateContext";

import { useLocation } from "react-router-dom";

function Search() {
  const { movies, searchResults, setSearchResults } = useStateContext();
  const [found, setFound] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("");

  let location = useLocation();
  const { pathname } = location;

  /**
   * If the pathname is '/', set the text to 'Search for movies or TV series'. If the pathname is
   * '/Movies', set the text to 'Search for movies'. If the pathname is '/TvSeries', set the text to
   * 'Search for TV series'. If the pathname is anything else, set the text to 'Search for bookmarked
   * shows'.
   */
  const placeHolderText = () => {
    if (pathname === "/") {
      setText("Search for movies or TV series");
    } else if (pathname === "/Movies") {
      setText("Search for movies");
    } else if (pathname === "/TvSeries") {
      setText("Search for TV series");
    } else {
      setText("Search for bookmarked shows");
    }
  };

  /* A hook that is used to perform side effects in function components. It serves the same purpose as
  componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into
  a single API. */
  useEffect(() => {
    placeHolderText();
  }, [pathname]);

  /* A function that prevents the default action of an element from happening. */
  const title = found.map((movie) => movie.title);
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
    if (!e.target.value) return setSearchResults(movies);

    const resultsArray = movies.filter((movie) =>
      movie.title.trim().toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(resultsArray);
    setFound(resultsArray);
    setInputValue(e.target.value);
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <Container>
        <SearchIcon />
        <SearchInput
          placeholder={text}
          onChange={handleSearchChange}
        ></SearchInput>
      </Container>
      {found.length ? (
        <SearchText className="search-text">
          Found {title.length} results for '{inputValue}'
        </SearchText>
      ) : null}
    </SearchContainer>
  );
}

export default Search;
