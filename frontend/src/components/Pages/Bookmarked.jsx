import React from "react";

/* Styled components import*/
import { CardsContainer, CardsSection } from "../styles/Cards.styled";

/* Context*/
import { useStateContext } from "../../Context/StateContext";
import { useAuthContext } from "../../hooks/useAuthContext";

/* BookmarkedCard*/
import BookmarkedCard from "../BookmarkedCard";

import axios from "axios";

import { useBookmark } from "../../hooks/useBookmark";

function Bookmarked() {
  const { bookmarked, setBookmarked } = useStateContext();
  const { user } = useAuthContext();

  console.log(bookmarked);

  const bookmarkedCard = bookmarked.map((movie) => {
    const { _id } = movie;
    const removeBookmark = async () => {
      try {
        const response = await axios({
          method: "PUT",
          url: `http://localhost:5000/movies/${_id}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          data: {
            isBookmarked: false,
          },
        });
        setBookmarked(
          bookmarked.filter((movie) => movie._id !== response.data._id)
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    return (
      <BookmarkedCard
        key={movie._id}
        movie={movie}
        removeBookmark={removeBookmark}
      />
    );
  });

  return (
    <CardsSection>
      <CardsContainer>{bookmarkedCard}</CardsContainer>
    </CardsSection>
  );
}

export default Bookmarked;
