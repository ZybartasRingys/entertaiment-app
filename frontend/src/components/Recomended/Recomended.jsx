import React from "react";

/* Styled components inputs*/
import {
  RecommendedSection,
  RecommendedContainer,
} from "../styles/Recommended";
/* Card import*/
import Card from "./Card";
/* Context*/

import { useStateContext } from "../../Context/StateContext";

function Recommended({}) {
  /* Mapping through the filteredRecommendedMovies array and returning a Card component for each movie. */
  const { searchResults } = useStateContext();

  /* Filtering out the movies that are trending. */
  const filteredRecommended = searchResults.filter(
    (movie) => movie.isTrending === false
  );

  /* Mapping through the filteredRecommendedMovies array and returning a Card component for each movie. */
  const recommendedCard = filteredRecommended.map((movie, _id) => {
    return <Card movie={movie} key={_id} />;
  });

  return (
    <RecommendedSection>
      <h1>Recommended for you</h1>
      <RecommendedContainer>
        {recommendedCard?.length ? recommendedCard : <p>No movies</p>}
      </RecommendedContainer>
    </RecommendedSection>
  );
}

export default Recommended;
