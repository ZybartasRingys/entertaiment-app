import React from "react";

/* Styled components import*/
import { CardsContainer, CardsSection } from "../styles/Cards.styled";

/* Context*/
import { useStateContext } from "../../Context/StateContext";

/* BookmarkedCard*/
import BookmarkedCard from "../BookmarkedCard";

function Bookmarked() {
  const { bookmarked } = useStateContext();

  const bookmarkedCard = bookmarked.map((movie) => {
    return <BookmarkedCard key={movie._id} movie={movie} />;
  });

  const filteredTvSeries = bookmarkedCard.filter(
    (series) => series.category === "TV Series"
  );

  console.log(filteredTvSeries);

  return (
    <CardsSection>
      <CardsContainer>
        <h1>Bookmarked Movies</h1>
        {bookmarkedCard}
      </CardsContainer>
      <CardsContainer>
        <h1>Bookmarked Tv Series</h1>
      </CardsContainer>
    </CardsSection>
  );
}

export default Bookmarked;
