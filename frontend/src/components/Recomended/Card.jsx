/* Styled Components imports*/

import {
  CardTop,
  CardBottom,
  CardDiv,
  RecommendedCard as RecommendedCard,
} from "../styles/Recommended";

/* Styled Components imports*/
import {
  IconDiv,
  TitleDiv,
  Div,
  IconContainer,
} from "../styles/Trending.styled";

/* Icons*/
import { ReactComponent as BookEmpty } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookFull } from "../../assets/icon-bookmark-full.svg";
import { ReactComponent as TvIcon } from "../../assets/icon-category-tv.svg";
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { BsDot } from "react-icons/bs";

/* Context*/
import { useAuthContext } from "../../hooks/useAuthContext";
import { useStateContext } from "../../Context/StateContext";

function Card({ movie }) {
  const { title, _id, isBookmarked, year, category, rating, thumbnail } = movie;
  const { user } = useAuthContext();

  const { addBookmark, remBookmark } = useStateContext();

  return (
    <RecommendedCard key={_id}>
      <CardTop
        style={{
          backgroundImage: `url(/public/${thumbnail.regular.small})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {user ? (
          <IconContainer>
            {isBookmarked ? (
              <IconDiv type="button" onClick={(e) => remBookmark(_id)}>
                <BookFull />
              </IconDiv>
            ) : (
              <IconDiv type="button" onClick={(e) => addBookmark(_id)}>
                <BookEmpty />
              </IconDiv>
            )}
          </IconContainer>
        ) : null}
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

export default Card;
