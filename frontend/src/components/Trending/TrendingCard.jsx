/* eslint-disable no-unused-vars */
/* Styled Components imports */

import {
  CardContainer,
  IconDiv,
  TextContainer,
  TitleDiv,
  TextDiv,
  Div,
  IconContainer,
  EmptyIcon,
  MovieIcon,
} from "../../components/styles/Trending.styled";

import { PlayDiv, PlayIcon } from "../../components/styles/Recommended";

/* Icons */

import { ReactComponent as BookFull } from "../../assets/icon-bookmark-full.svg";

import { BsDot } from "react-icons/bs";

/* Context */
import { useStateContext } from "../../Context/StateContext";
import { useAuthContext } from "../../hooks/useAuthContext";

function TrendingCard({ movie }) {
  const { title, _id, isBookmarked, year, category, rating, thumbnail } = movie;
  const { addBookmark, remBookmark } = useStateContext();
  const { user } = useAuthContext();

  return (
    <CardContainer
      key={_id}
      style={{
        backgroundImage: `url(/public/${thumbnail.trending.large})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <PlayDiv>
        <PlayIcon />
        Play
      </PlayDiv>
      {user ? (
        <IconContainer>
          {isBookmarked ? (
            <IconDiv type="button" onClick={(e) => remBookmark(_id)}>
              <BookFull />
            </IconDiv>
          ) : (
            <IconDiv type="button" onClick={(e) => addBookmark(_id)}>
              <EmptyIcon />
            </IconDiv>
          )}
        </IconContainer>
      ) : (
        <IconContainer />
      )}

      <TextContainer>
        <TextDiv>
          <p>{year}</p>
          <BsDot />
          <MovieIcon />
          <p>{category}</p>
          <BsDot />
          <p>{rating}</p>
        </TextDiv>

        <TitleDiv>
          <h5>{title}</h5>
        </TitleDiv>
      </TextContainer>
    </CardContainer>
  );
}

export default TrendingCard;
