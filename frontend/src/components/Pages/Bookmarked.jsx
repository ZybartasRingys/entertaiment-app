import React from "react";

/* Styled components import*/
import { CardsContainer } from "../styles/Cards.styled";

/* Context*/
import { useStateContext } from "../../Context/StateContext";

/* BookmarkedCard*/
import BookmarkedCard from "../BookmarkedCard";

function Bookmarked() {
  const { bookmarked } = useStateContext();

  const bookmarkedCard = bookmarked.map((movie) => (
    <BookmarkedCard key={movie._id} movie={movie} />
  ));

  return <CardsContainer>{bookmarkedCard}</CardsContainer>;
}

export default Bookmarked;
