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
  const { recomended } = useStateContext();

  /* Mapping through the filteredRecomendedMovies array and returning a Card component for each movie. */
  const recomendedCard = recomended.map((movie) => {
    return <Card movie={movie} key={movie._id} />;
  });

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
