import React, { useState } from "react";

/* Styled components inputs*/
import {
  RecomendedSection,
  RecomendedContainer,
} from "../styles/Recomended.styled";
import Card from "./Card";

import axios from "axios";

/* Context*/
import { useStateContext } from "../../Context/StateContext";
import { useAuthContext } from "../../hooks/useAuthContext";

function Recomended() {
  const { user } = useAuthContext();
  const { searchResults, bookmarked, setBookmarked } = useStateContext();

  const { setBookmark, removeBookmark } = useStateContext();

  /* Filtering through the searchResults array and returning a new array with only the movies that have
  isTrending set to false. */
  const filteredRecomendedMovies = searchResults.filter(
    (movie) => movie.isTrending === false
  );

  /* Mapping through the filteredRecomendedMovies array and returning a Card component for each movie. */
  const recomendedCard = filteredRecomendedMovies.map((movie) => {
    const { _id } = movie;

    const setBookmark = async () => {
      try {
        const response = await axios({
          method: "PUT",
          url: `http://localhost:5000/movies/${_id}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          data: {
            isBookmarked: true,
          },
        });
        setBookmarked([...bookmarked, response.data]);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
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
        setBookmarked([...bookmarked]);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    return (
      <Card
        movie={movie}
        key={movie._id}
        setBookmark={setBookmark}
        removeBookmark={removeBookmark}
      />
    );
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
