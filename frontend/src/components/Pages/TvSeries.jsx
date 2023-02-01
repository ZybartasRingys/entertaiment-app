import React from "react";

/* Styled component*/
import { CardsSection, CardsContainer } from "../styles/Cards.styled";

/* Context*/
import { useStateContext } from "../../Context/StateContext";

import TvSeriesCard from "../cards/TvSeriesCard";

function TvSeries() {
  const { movies } = useStateContext();

  const filteredTvSeries = movies.filter(
    (movie) => movie.category === "TV Series"
  );

  const tvSeriesCard = filteredTvSeries.map((movie) => {
    return <TvSeriesCard key={movie._id} movie={movie} />;
  });

  return (
    <CardsSection>
      <CardsContainer>{tvSeriesCard}</CardsContainer>
    </CardsSection>
  );
}

export default TvSeries;
