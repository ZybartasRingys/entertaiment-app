import React from "react";

/* Styled component*/
import { CardsSection, CardsContainer } from "../styles/Cards.styled";

/* Context*/
import { useStateContext } from "../../Context/StateContext";

/* Movie card*/
import MovieCard from "../cards/MovieCard";

function Movies() {
  const { movies } = useStateContext();

  const filteredMovies = movies.filter((movie) => movie.category === "Movie");

  const movieCard = filteredMovies.map((movie) => {
    return <MovieCard key={movie._id} movie={movie} />;
  });
  return (
    <CardsSection>
      <CardsContainer>{movieCard}</CardsContainer>
    </CardsSection>
  );
}

export default Movies;
