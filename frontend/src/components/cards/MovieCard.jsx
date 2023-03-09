import React from "react";

/* Styled Components imports*/

import {
  CardTop,
  CardBottom,
  CardDiv,
  RecommendedCard,
} from "../styles/Recommended";

/* Styled Components imports*/
import {
  IconDiv,
  TitleDiv,
  Div,
  IconContainer,
} from "../styles/Trending.styled";

import { ReactComponent as BookEmpty } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookFull } from "../../assets/icon-bookmark-full.svg";
import { ReactComponent as TvIcon } from "../../assets/icon-category-tv.svg";
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { BsDot } from "react-icons/bs";

/* Context*/
import { useAuthContext } from "../../hooks/useAuthContext";

function MovieCard({ movie }) {
  const { title, year, category, rating, _id, thumbnail, isBookmarked } = movie;
  const { user } = useAuthContext();

  return (
    <RecommendedCard key={_id}>
      <CardTop
        style={{
          backgroundImage: `url(/public/${thumbnail.regular.small})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <IconContainer>
          {user ? (
            <IconContainer>
              {isBookmarked ? (
                <IconDiv type="button">
                  <BookFull />
                </IconDiv>
              ) : (
                <IconDiv type="button">
                  <BookEmpty />
                </IconDiv>
              )}
            </IconContainer>
          ) : null}
        </IconContainer>
      </CardTop>

      <CardBottom>
        <CardDiv>
          <Div>
            <p>{year}</p>
            <BsDot size={12} />
          </Div>
          <Div>
            {category === "Movie" ? <MovieIcon /> : <TvIcon />}
            <p>{category}</p>
          </Div>
          <Div>
            <BsDot size={11} />
            <p>{rating}</p>
          </Div>
        </CardDiv>

        <TitleDiv>
          <h2>{title}</h2>
        </TitleDiv>
      </CardBottom>
    </RecommendedCard>
  );
}

export default MovieCard;
