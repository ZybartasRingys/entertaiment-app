import React from "react";

/* Styled components inputs*/
import {
  RecomendedSection,
  RecomendedContainer,
} from "../styles/Recomended.styled";
import Card from "./Card";

/* Context*/
import { useStateContext } from "../../Context/StateContext";

function Recomended() {
  const { searchResults } = useStateContext();

  /* Filtering through the searchResults array and returning a new array with only the movies that have
  isTrending set to false. */
  const filteredRecomendedMovies = searchResults.filter(
    (movie) => movie.isTrending === false
  );

  /* Mapping through the filteredRecomendedMovies array and returning a Card component for each movie. */
  const recomendedCard = filteredRecomendedMovies.map((movie) => (
    <Card movie={movie} key={movie._id} />
  ));

  return (
    <RecomendedSection>
      <h1>Recommended for you</h1>
      <RecomendedContainer>
        {recomendedCard?.length ? recomendedCard : <p>No movies</p>}
      </RecomendedContainer>
    </RecomendedSection>
  );
}

export default Recomended;
