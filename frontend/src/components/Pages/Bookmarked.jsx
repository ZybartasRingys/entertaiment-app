import React from "react";

// Context
import { useStateContext } from "../../Context/StateContext";
import BookmarkedCard from "../BookmarkedCard";

function Bookmarked() {
  const { bookmarked } = useStateContext();

  const bookmarkedCard = bookmarked.map((movie) => (
    <BookmarkedCard key={movie._id} movie={movie} />
  ));

  return <div>{bookmarkedCard}</div>;
}

export default Bookmarked;
