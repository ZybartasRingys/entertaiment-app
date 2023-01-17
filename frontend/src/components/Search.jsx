import React from "react";
import { SearchInput, SearchContainer } from "./styles/Search.styled";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";

function Search() {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput placeholder="Search for movies or TV series"></SearchInput>
    </SearchContainer>
  );
}

export default Search;
