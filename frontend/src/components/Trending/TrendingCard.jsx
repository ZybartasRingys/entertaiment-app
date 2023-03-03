/* Styled Componenets imports*/
import {
  CardContainer,
  IconDiv,
  TextContainer,
  TitleDiv,
  TextDiv,
  Div,
  IconContainer,
} from "../../components/styles/Trending.styled";

/* Icons*/

import { ReactComponent as BookEmpty } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookFull } from "../../assets/icon-bookmark-full.svg";
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { BsDot } from "react-icons/bs";

/* Context*/
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
        backgroundImage: `url(/public/${thumbnail.trending.small})`,
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
      ) : (
        <IconContainer />
      )}

      <TextContainer>
        <TextDiv>
          <Div>
            <p>{year}</p>
            <BsDot />
          </Div>
          <Div>
            <MovieIcon />
            <p>{category}</p>
            <BsDot />
          </Div>
          <Div>
            <p>{rating}</p>
          </Div>
        </TextDiv>

        <TitleDiv>
          <h5>{title}</h5>
        </TitleDiv>
      </TextContainer>
    </CardContainer>
  );
}

export default TrendingCard;
