import React from "react";

/* Styled components import*/
import { CardsContainer, CardsSection } from "../styles/Cards.styled";

/* Context*/
import { useStateContext } from "../../Context/StateContext";

/* BookmarkedCard*/
import BookmarkedCard from "../BookmarkedCard";

function Bookmarked() {
  const { bookmarked, setBookmarked } = useStateContext();

  /* Filtering the bookmarked array and then mapping over the filtered array and returning a
BookmarkedCard component. */
  const bookmarkedMovieCard = bookmarked
    .filter((filtered) => filtered.category === "Movie")
    .map((movie) => <BookmarkedCard movie={movie} key={movie._id} />);

  /* Filtering the bookmarked array and then mapping over the filtered array and returning a
BookmarkedCard component. */
  const bookmarkedSeriesCard = bookmarked
    .filter((filtered) => filtered.category === "TV Series")
    .map((movie) => <BookmarkedCard movie={movie} key={movie._id} />);

  return (
    <CardsSection>
      <h1>Bookmarked Movies</h1>
      <CardsContainer>{bookmarkedMovieCard}</CardsContainer>
      <h1>Bookmarked TV Series</h1>
      <CardsContainer>{bookmarkedSeriesCard}</CardsContainer>
    </CardsSection>
  );
}

export default Bookmarked;
