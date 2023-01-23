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

// Context
import { useStateContext } from "../Context/StateContext";

// icons

import { ReactComponent as BookEmpty } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookFull } from "../assets/icon-bookmark-full.svg";
import { ReactComponent as TvIcon } from "../assets/icon-category-tv.svg";
import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";
import { BsDot } from "react-icons/bs";

function BookmarkedCard({ movie }) {
  const { title } = movie;
  const { isBookmarked, setIsBookmarked } = useStateContext();
  return (
    <div>
      <RecomendedCard key={movie._id}>
        <CardTop>
          <IconContainer>
            {isBookmarked ? (
              <IconDiv type="button" onClick={setIsBookmarked(true)}>
                <BookEmpty />
              </IconDiv>
            ) : (
              <IconDiv type="button" onClick={setIsBookmarked(false)}>
                <BookFull />
              </IconDiv>
            )}
          </IconContainer>
        </CardTop>

        <CardBottom>
          <CardDiv>
            <Div>
              <p>{movie.year}</p>
              <BsDot size={12} />
            </Div>
            <Div>
              {movie.category === "Movie" ? <MovieIcon /> : <TvIcon />}
              <p>{movie.category}</p>
            </Div>
            <Div>
              <BsDot size={11} />
              <p>{movie.rating}</p>
            </Div>
          </CardDiv>

          <TitleDiv>
            <h2>{movie.title}</h2>
          </TitleDiv>
        </CardBottom>
      </RecomendedCard>
    </div>
  );
}

export default BookmarkedCard;
