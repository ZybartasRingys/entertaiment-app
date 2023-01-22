import React from "react";

// Context
import { useStateContext } from "../../Context/StateContext";
import Card from "../Recomended/Card";

function Bookmarked() {
  const { movies } = useStateContext();

  const bookmarkedMovies = movies.filter((movie) => movie.isBookmarked);

  const bookmarkedMovieCard = bookmarkedMovies.map((movie) => (
    <Card key={movie.id} />
  ));
  return <div>{bookmarkedMovieCard}</div>;
}

export default Bookmarked;
