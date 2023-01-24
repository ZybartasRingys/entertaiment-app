/* Styled Componenets imports*/
import {
  CardTop,
  CardBottom,
  CardDiv,
  RecomendedCard,
} from "./styles/Recomended.styled";

/* Styled Componenets imports*/

import {
  IconDiv,
  TitleDiv,
  Div,
  IconContainer,
} from "./styles/Trending.styled";

/* Context*/
import { useStateContext } from "../Context/StateContext";

/* Icons*/

import { ReactComponent as BookEmpty } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookFull } from "../assets/icon-bookmark-full.svg";
import { ReactComponent as TvIcon } from "../assets/icon-category-tv.svg";
import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";
import { BsDot } from "react-icons/bs";

import { useState } from "react";

function BookmarkedCard({ movie }) {
  const { title, isBookmarked, year, category, rating, _id } = movie;

  return (
    <div>
      <RecomendedCard key={_id}>
        <CardTop>
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
      </RecomendedCard>
    </div>
  );
}

export default BookmarkedCard;
